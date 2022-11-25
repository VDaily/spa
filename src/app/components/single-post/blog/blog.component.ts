import {Component, OnInit, ViewChild} from '@angular/core';
import SwiperCore, {Swiper, Pagination, Navigation} from 'swiper';
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  // @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  swiper: any;
  blogArticlesArr = [
    {
      id: 1,
      name: 'article-img1.svg',
      alt: 'Image minimalism',
      categoryName: 'Design',
      type: 'Podcast',
      date: 'August 3, 2020',
      timeSpent: '36 min',
      title: 'What are color profiles and how they work in graphic design',

      content: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, cupiditate debitis ducimus facere illum in ipsam itaque molestiae nostrum placeat quasi quos recusandae, reiciendis sit, tempore unde. Laudantium, maiores?'
    },
    {
      id: 2,
      name: 'article-img2.svg',
      alt: 'Laptop picture',
      categoryName: 'Development',
      type: 'Article',
      date: 'September 1, 2020',
      title: 'How to choose the first programming language for a beginner',
      content: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestaslaoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas '
    },
    {
      id: 3,
      name: 'article-img3.svg',
      alt: 'The guy with the big hat',
      categoryName: 'Design',
      type: 'Article',
      date: 'August 8, 2020',
      title: 'Should you choose a creative profession if you are attracted to creativity?',
      content: 'Curabitur nisl tincidunt eros venenatis vestibulunisl tincidunt eros venenatis vestibulu'
    },
    {
      id: 2,
      name: 'article-img2.svg',
      alt: 'Laptop picture',
      categoryName: 'Development',
      type: 'Article',
      date: 'September 1, 2020',
      title: 'How to choose the first programming language for a beginner',
      content: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestaslaoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas '
    }
  ]

  constructor(
  ) {

  }

  ngOnInit(): void {
    this.swiper = new Swiper('.mySwiper', {
      modules: [Pagination, Navigation],
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      pagination: {
        clickable: true,
      },
      navigation: true


      // rewind: true
    })
  }
  slideNext(){
    if(!this.swiper) return;
    this.swiper.slideNext(100);
    console.log(this.swiper);
  }
  slidePrev(){
    if(!this.swiper) return;
    this.swiper.slidePrev(100);
    console.log(this.swiper);
  }
}
