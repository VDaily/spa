import { Component, OnInit } from "@angular/core";
import { SocialItemsService } from "../../../../services/social-items.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss", "../main-content.component.scss", "../../single-post.component.scss"],
})
export class ArticleComponent implements OnInit {
  socialArticleArr = ["facebook", "twitter", "inblog"];
  pictures = {
    article: {
      src: "./assets/images/blog/articles-main-picture/article-img4.svg",
      alt: "Стол с клавиатурой и очками. Заголовок статьи.",
    },
  };

  constructor(private social: SocialItemsService) {}

  ngOnInit(): void {}

  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
}
