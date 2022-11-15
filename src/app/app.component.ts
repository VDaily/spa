import {Component, HostListener, ElementRef, ViewChild, OnInit} from '@angular/core';
import { StateModalWindowService } from './services/stateModalWindow/state-modal-window.service'
import { SocialItemsService } from './services/socialItems/social-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spa';
  socialFooterArr = ['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'inblog'];
  constructor(
    private openModal: StateModalWindowService,
    private social: SocialItemsService
  ) { }
  ngOnInit() {

  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
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
}
