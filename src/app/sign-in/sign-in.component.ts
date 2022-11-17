import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  isHiddenPass = true;
  socialLogIn = ['facebook', 'google', 'twitter', 'inblog'];
  constructor(
    private social: SocialItemsService,
    private matDialogRef: MatDialogRef<SignInComponent>
  ) {

  }
  ngOnInit(): void {
  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
  closeDialogWindow() {
    this.matDialogRef.close();
  }

  ngOnDestroy(): void {
    this.matDialogRef.close();
  }
}
