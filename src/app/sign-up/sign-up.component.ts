import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
