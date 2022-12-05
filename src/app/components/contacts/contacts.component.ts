import { Component, OnInit } from "@angular/core";
import { SocialItem, SocialItemsService } from "../../services/social-items.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  email = "hello@createx.com";
  phoneNumber = "+7(405) 555-0128";
  address = "2464 Royal Ln. Mesa, New Jersey 45463, USA";
  socialContactsArr = ["facebook", "twitter", "youtube", "telegram", "instagram", "inblog"];

  pictures = {
    woman: {
      src: "./assets/images/contact-us/woman.svg",
      alt: "Изображение женщины. Изображение для декора",
    },
  };
  Picture = {};

  constructor(private social: SocialItemsService) {}

  socialItems(socialItems: string[]): SocialItem[] {
    return this.social.socialItems(socialItems);
  }

  ngOnInit(): void {}
}
