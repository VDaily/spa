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
  @ViewChild('inputPassOne') inputPassOne!: ElementRef<HTMLInputElement>;
  @ViewChild('inputPassTwo') inputPassTwo!: ElementRef<HTMLInputElement>;
  constructor(
    private social: SocialItemsService
  ) { }

  ngOnInit(): void {
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
  changeHiddenPassAgain() {
    this.isHiddenPassAgain = !this.isHiddenPassAgain;
    let inputPassTwo = this.inputPassTwo.nativeElement;

    if(inputPassTwo.type === "text") {
      inputPassTwo.type = "password";
    } else {
      inputPassTwo.type = "text";
    }
  }
  get socialItems() {
    return this.social.socialItems;
  }
}
