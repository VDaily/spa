import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SocialItemsService } from '../services/socialItems/social-items.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isHiddenPass = true;
  @ViewChild('inputPassOne') inputPassOne!: ElementRef<HTMLInputElement>;
  constructor(private social: SocialItemsService) {

  }

  ngOnInit(): void {
  }

  get socialItems() {
    return this.social.socialItems;
  }
  changeHiddenPass() {
    this.isHiddenPass = !this.isHiddenPass;
    let inputPassOne = this.inputPassOne.nativeElement;
    if(inputPassOne.type === "text") {
      inputPassOne.type = "password";
    } else {
      inputPassOne.type = "text";
    }
  }
}
