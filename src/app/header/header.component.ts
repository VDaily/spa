import { Component, OnInit } from '@angular/core';
import { StateModalWindowService } from '../services/stateModalWindow/state-modal-window.service';
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
    private openModal: StateModalWindowService,
    private matDialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/logo/logo.svg')
    );
  }

  ngOnInit(): void {
  }
  get stateModalWindow() {
    return this.openModal.stateModalWindow;
  }

  set stateModalWindow(state) {
    this.openModal.stateModalWindow = state;
  }
  changeStateModalWindow() {
    this.stateModalWindow = !this.stateModalWindow;
    let bodyElement = document.body;


    if(this.stateModalWindow) {
      bodyElement.classList.add('modal-open');
    } else {
      bodyElement.classList.remove('modal-open');
    }
  }

  onOpenDialogSignInClick() {
    this.matDialog.open(SignInComponent);
  }
  onOpenDialogSignUpClick() {
    this.matDialog.open(SignUpComponent);
  }
}
