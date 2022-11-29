import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-trending-article",
  templateUrl: "./trending-article.component.html",
  styleUrls: ["./trending-article.component.scss"],
})
export class TrendingArticleComponent implements OnInit {
  @Input() article: any;
  srcImg = "./assets/images/articles/";

  constructor() {}

  ngOnInit(): void {}
}
