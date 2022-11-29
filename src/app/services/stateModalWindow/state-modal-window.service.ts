import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StateModalWindowService {
  isOpenModal = false;

  constructor() {}

  next(state: boolean) {
    this.isOpenModal = state;
  }

  get stateModalWindow() {
    return this.isOpenModal;
  }

  set stateModalWindow(state) {
    this.isOpenModal = state;
  }
}
