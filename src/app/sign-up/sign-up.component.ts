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

  constructor(
    private social: SocialItemsService
  ) { }

  ngOnInit(): void {
  }

  get socialItems() {
    return this.social.socialItems;
  }
}
