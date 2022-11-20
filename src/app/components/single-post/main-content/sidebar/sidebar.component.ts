import { Component, OnInit } from '@angular/core';
import { SocialItemsService } from '../../../../services/socialItems/social-items.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './sidebar.component.scss',
    '../main-content.component.scss',
    '../../single-post.component.scss'
  ]
})
export class SidebarComponent implements OnInit {
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
