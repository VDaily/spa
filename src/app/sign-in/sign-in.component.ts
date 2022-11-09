import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isHiddenPass = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeHiddenPass() {
    this.isHiddenPass = !this.isHiddenPass;
    const input = document.getElementById("registration-pass") as HTMLInputElement;
    if(!input) throw new Error("Не найден элемент #registration-pass");

    if(input.type === "text") {
      input.type = "password";
    } else {
      input.type = "text";
    }

  }
}
