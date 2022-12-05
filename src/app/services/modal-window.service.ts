import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material/dialog";
import { ComponentType } from "@angular/cdk/overlay";

@Injectable({
  providedIn: "root",
})
export class ModalWindowService {
  constructor(private matDialog: MatDialog) {}

  open(component: ComponentType<any>, options: any): void {
    this.matDialog.open(component, options);
  }
}
