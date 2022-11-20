import {Component, OnDestroy, OnInit } from '@angular/core';
import { SocialItemsService } from '../../services/socialItems/social-items.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  isHiddenPass = true;

  socialLogIn = ['facebook', 'google', 'twitter', 'inblog'];

  pictures = {
    close: {
      src: "./assets/images/modal/close.svg",
      alt: "закрыть модальное окно",
    },
    eyes: {
      src: "./assets/images/register/",
      open: {
        src: 'eye-open.svg',
        alt: "Открытый глаз, можно посмотреть пароль"
      },
      close: {
        src: 'eye.png',
        alt: "Закрытый глаз, нельзя посмотреть пароль"
      }
    }
  }

  currentEyeObj : Eye = {
    src: `${this.pictures.eyes.src + this.pictures.eyes.close.src}`,
    alt: `${this.pictures.eyes.close.alt}`
  }

  constructor(
    private social: SocialItemsService,
    private matDialogRef: MatDialogRef<SignInComponent>
  ) { }
  ngOnInit(): void { }

  changeCurrentEye(): void {
    let currentSrc: string, currentAlt: string;

    if (this.isHiddenPass) {
      currentSrc = this.pictures.eyes.close.src;
      currentAlt = this.pictures.eyes.close.alt;
    } else {
      currentSrc = this.pictures.eyes.open.src;
      currentAlt = this.pictures.eyes.open.alt;
    }

    this.currentEyeObj = {
      src: this.pictures.eyes.src + currentSrc,
      alt: currentAlt
    }
  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
  closeDialogWindow(): void {
    this.matDialogRef.close();
  }
  ngOnDestroy(): void {
    this.matDialogRef.close();
  }
  changeIsHiddenPass(): void {
    this.isHiddenPass = !this.isHiddenPass;
    this.changeCurrentEye();
  }

}

interface Eye {
  src: string;
  alt: string;
}
