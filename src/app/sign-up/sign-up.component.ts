import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isHiddenPass = true;
  isHiddenPassAgain = true;
  socialLogUp = ['facebook', 'google', 'twitter', 'inblog']
  constructor(
    private social: SocialItemsService
  ) { }

  ngOnInit(): void {
  }

  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
}
