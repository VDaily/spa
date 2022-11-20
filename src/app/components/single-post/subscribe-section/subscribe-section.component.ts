import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})
export class SubscribeSectionComponent implements OnInit {
  pictures = {
    man: {
      src: "./assets/images/single-post/subscribe-section/man.svg",
      alt: "Изображение мужчины, декор."
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
