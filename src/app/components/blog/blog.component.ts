import { Component, Inject } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { Article, blogArticlesArr } from "./articles";
import { PageEvent } from "@angular/material/paginator";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HostService } from "../../services/host/host.service";

@Component({
  selector: "app-main-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class MainBlogComponent {
  types = ["Article", "Podcast", "Video"];
  typesWithAll = ["All", ...this.types];
  name = "";
  settings = {
    length: 8,
  };
  currentType = this.typesWithAll[0];
  isHidePageSize = true;
  allArticles = blogArticlesArr;
  filteredArticles: Article[];
  currentArticles: Article[];
  numberOfPagesArr: number[];

  constructor() {
    this.filteredArticles = this.getFilteredArticles();
    this.currentArticles = this.filteredArticles.slice(0, this.settings.length);

    this.numberOfPagesArr = [];
    const length = Math.ceil(this.filteredArticles.length / this.settings.length);
    for (let i = 0, count = 1; i < length; i++, count++) {
      this.numberOfPagesArr.push(count);
      console.log(this.numberOfPagesArr);
    }
  }

  changeType(id: number): void {
    this.currentType = this.typesWithAll[id];
    this.filteredArticles = this.getFilteredArticles();
    this.currentArticles = this.filteredArticles.slice(0, this.settings.length);
  }

  getFilteredArticles(): Article[] {
    if (this.types.includes(this.currentType)) {
      return this.allArticles.filter((article: Article) => article.type === this.currentType);
    } else {
      return this.allArticles;
    }
  }

  OnPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = event.pageSize + startIndex;
    if (endIndex > this.filteredArticles.length) endIndex = this.filteredArticles.length;
    this.currentArticles = this.filteredArticles.slice(startIndex, endIndex);
  }
}
