import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isHiddenPass = true;

  constructor(private social: SocialItemsService) {

  }
  ngOnInit(): void {
  }

  get socialItems() {
    return this.social.socialItems;
  }

}
