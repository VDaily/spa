import { Component, OnInit, OnDestroy } from "@angular/core";
import { SocialItem, SocialItemsService } from "../../services/social-items.service";
import { MatDialogRef } from "@angular/material/dialog";
import { SignInComponent } from "../sign-in/sign-in.component";
import { ModalWindowService } from "../../services/modal-window.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit, OnDestroy {
  isHiddenPass = true;
  isHiddenPassAgain = true;
  socialLogUp = ["facebook", "google", "twitter", "inblog"];

  pictures = {
    close: {
      src: "./assets/images/modal/close.svg",
      alt: "закрыть модальное окно",
    },
    eyes: {
      src: "./assets/images/register/",
      open: {
        src: "eye-open.svg",
        alt: "Открытый глаз, можно посмотреть пароль",
      },
      close: {
        src: "eye.png",
        alt: "Закрытый глаз, нельзя посмотреть пароль",
      },
    },
  };
  currentEyeObj: Eye = {
    src: `${this.pictures.eyes.src + this.pictures.eyes.close.src}`,
    alt: `${this.pictures.eyes.close.alt}`,
  };
  currentEyeObjAgain: Eye = {
    src: `${this.pictures.eyes.src + this.pictures.eyes.close.src}`,
    alt: `${this.pictures.eyes.close.alt}`,
  };

  constructor(
    private social: SocialItemsService,
    private matDialogRef: MatDialogRef<SignUpComponent | SignInComponent>,
    private modal: ModalWindowService
  ) {}

  ngOnInit(): void {}

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
      alt: currentAlt,
    };
  }

  changeCurrentEyeAgain(): void {
    let currentSrc: string, currentAlt: string;

    if (this.isHiddenPassAgain) {
      currentSrc = this.pictures.eyes.close.src;
      currentAlt = this.pictures.eyes.close.alt;
    } else {
      currentSrc = this.pictures.eyes.open.src;
      currentAlt = this.pictures.eyes.open.alt;
    }

    this.currentEyeObjAgain = {
      src: this.pictures.eyes.src + currentSrc,
      alt: currentAlt,
    };
  }

  changeIsHiddenPass(): void {
    this.isHiddenPass = !this.isHiddenPass;
    this.changeCurrentEye();
  }

  changeIsHiddenPassAgain(): void {
    this.isHiddenPassAgain = !this.isHiddenPassAgain;
    this.changeCurrentEyeAgain();
  }

  socialItems(socialItems: string[]): SocialItem[] {
    return this.social.socialItems(socialItems);
  }

  closeDialogWindow(): void {
    this.matDialogRef.close();
  }

  ngOnDestroy(): void {
    this.matDialogRef.close();
  }

  openSignIn(): void {
    this.matDialogRef.close();
    this.modal.open(SignInComponent, {
      enterAnimationDuration: "0ms",
      exitAnimationDuration: "0ms",
    });
  }
}

interface Eye {
  src: string;
  alt: string;
}
