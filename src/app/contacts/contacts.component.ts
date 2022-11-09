import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  email = "hello@createx.com";
  phoneNumber = "+7(405) 555-0128";
  address = "2464 Royal Ln. Mesa, New Jersey 45463, USA";


  constructor() { }

  ngOnInit(): void {
  }

}
