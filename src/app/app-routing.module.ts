import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {SinglePostComponent} from "./single-post/single-post.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Our contacts' },
  },
  {
    path: 'single-post',
    component: SinglePostComponent,
    data: { title: 'Our blog' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
