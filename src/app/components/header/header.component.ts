import { Component, OnInit } from '@angular/core';
import { StateModalWindowService } from '../../services/stateModalWindow/state-modal-window.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ModalWindowService} from "../../services/modalWindow/modal-window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private modal: ModalWindowService
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/logo/logo.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'message',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/header/message.svg')
    );
  }

  ngOnInit(): void {
  }
  openSignIn():void {
    this.modal.open(SignInComponent, {
      enterAnimationDuration: "0ms",
      exitAnimationDuration: "0ms",
    });
  }
  openSignUp():void {
    this.modal.open(SignUpComponent, {
      enterAnimationDuration: "0ms",
      exitAnimationDuration: "0ms",
    });
  }
}
