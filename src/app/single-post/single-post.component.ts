import { Component, OnInit } from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  socialArticleArr = ['facebook', 'twitter', 'inblog'];
  socialAuthorArr = ['instagram', 'twitter', 'inblog'];
  constructor(
    private social: SocialItemsService
  ) { }

  ngOnInit(): void {
  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
}
