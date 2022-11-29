import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import { ChartsComponent } from "./components/charts/charts.component";
import {MainBlogComponent} from "./components/blog/blog.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Our contacts' },
  },
  {
    path: 'main-blog',
    component: MainBlogComponent,
    data: { title: 'Our blog' },
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: { title: 'Charts company' },
  },
  {
    path: '**',
    component: SinglePostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
