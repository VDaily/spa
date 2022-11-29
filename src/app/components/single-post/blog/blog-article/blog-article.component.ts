import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-article",
  templateUrl: "./blog-article.component.html",
  styleUrls: ["./blog-article.component.scss", "../../single-post.component.scss"],
})
export class BlogArticleComponent implements OnInit {
  @Input() article: any;
  srcImg = "./assets/images/blog/articles-main-picture/";
  articleTypeObj: TypeObj = {
    className: "",
    title: "Article",
    button: "Read",
  };

  constructor() {}

  ngOnInit(): void {
    if (this.article.type === "Podcast") {
      this.articleTypeObj = {
        className: "categoryName__podcast",
        title: "Podcast",
        button: "Listen",
      };
    } else if (this.article.type === "Video") {
      this.articleTypeObj = {
        className: "categoryName__video",
        title: "Video",
        button: "Watch",
      };
    }
  }
}

interface TypeObj {
  className: string;
  title: "Podcast" | "Video" | "Article";
  button: "Listen" | "Watch" | "Read";
}
