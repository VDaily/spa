import { Component, OnInit } from '@angular/core';
import { StateModalWindowService } from '../../services/stateModalWindow/state-modal-window.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

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

  onOpenDialogSignInClick():void {
    this.matDialog.open(SignInComponent);
  }
  onOpenDialogSignUpClick():void {
    this.matDialog.open(SignUpComponent);
  }
}
