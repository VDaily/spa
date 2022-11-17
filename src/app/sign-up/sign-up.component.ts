import {Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';
import {MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  isHiddenPass = true;
  isHiddenPassAgain = true;
  socialLogUp = ['facebook', 'google', 'twitter', 'inblog']
  constructor(
    private social: SocialItemsService,
    private matDialogRef: MatDialogRef<SignUpComponent>
  ) { }

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
