import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: [
    './blog-article.component.scss',
    '../../single-post.component.scss'
  ]
})
export class BlogArticleComponent implements OnInit {
  @Input() article: any;
  constructor() { }

  ngOnInit(): void {

  }

}
