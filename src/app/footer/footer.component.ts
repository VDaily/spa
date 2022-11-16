import { Component, OnInit } from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialFooterArr = ['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'inblog'];
  constructor(
    private social: SocialItemsService
  ) { }

  ngOnInit(): void {
  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
}
