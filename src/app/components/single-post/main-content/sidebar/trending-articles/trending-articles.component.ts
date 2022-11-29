import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trending-articles",
  templateUrl: "./trending-articles.component.html",
  styleUrls: ["./trending-articles.component.scss"],
})
export class TrendingArticlesComponent implements OnInit {
  trendingArticlesArr = [
    {
      id: 1,
      name: "1.svg",
      alt: "Image minimalism",
      date: "September 4, 2020",
      title: "What is traffic arbitrage and does it really make money?",
    },
    {
      id: 2,
      name: "2.svg",
      alt: "Image minimalism",
      date: "July 15, 2020",
      title: "Startup: how to build a team that will live longer than a year",
    },
    {
      id: 3,
      name: "3.svg",
      alt: "Image minimalism",
      date: "August 2, 2020",
      title: "What to do if you want to get feedback on the product",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
