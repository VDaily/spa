import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search-blog",
  templateUrl: "./search-blog.component.html",
  styleUrls: ["./search-blog.component.scss"],
})
export class SearchBlogComponent {
  searchForm = new FormControl();

  constructor() {}
}
