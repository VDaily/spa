import { Component, OnInit } from "@angular/core";
import { SocialItem, SocialItemsService } from "../../../../services/social-items.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss", "../main-content.component.scss", "../../single-post.component.scss"],
})
export class SidebarComponent implements OnInit {
  socialAuthorArr = ["instagram", "twitter", "inblog"];

  pictures = {
    author: {
      src: "./assets/images/author/author.svg",
      alt: "Девушка в очках с русыми волосами на жёлтом фоне. Автор статьи",
    },
    articles: [
      {
        src: "",
        alt: "Нарисованное лицо с глазом. На синием фоне",
      },
    ],
  };

  constructor(private social: SocialItemsService) {}

  ngOnInit(): void {}

  socialItems(socialItems: string[]): SocialItem[] {
    return this.social.socialItems(socialItems);
  }
}
