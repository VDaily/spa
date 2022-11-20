import { Component, OnInit } from '@angular/core';
import { SocialItemsService } from '../../services/socialItems/social-items.service';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialFooterArr = ['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'inblog'];
  constructor(
    private social: SocialItemsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
    'logoWhite',
    this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/logo/logoWhite.svg')
  );
  }

  ngOnInit(): void {
  }
  socialItems(socialItems: string[]) {
    return this.social.socialItems(socialItems);
  }
}
