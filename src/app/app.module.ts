import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule} from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSliderModule} from "@angular/material/slider";
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AngularYandexMapsModule, YaConfig  } from 'angular8-yandex-maps';

import { AppComponent } from './app.component';

//Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/single-post/main-content/main-content.component';
import { ArticleComponent } from './components/single-post/main-content/article/article.component';
import { SidebarComponent } from './components/single-post/main-content/sidebar/sidebar.component';
import { SubscribeSectionComponent } from './components/single-post/subscribe-section/subscribe-section.component';
import { BlogComponent } from './components/single-post/blog/blog.component';
import { BlogArticleComponent } from './components/single-post/blog/blog-article/blog-article.component';
import { SwiperModule } from "swiper/angular";
import { ColorfulDirective } from './directives/colorful/colorful.directive';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrendingArticlesComponent } from './components/single-post/main-content/sidebar/trending-articles/trending-articles.component';
import { TrendingArticleComponent } from './components/single-post/main-content/sidebar/trending-articles/trending-article/trending-article.component';


const mapConfig: YaConfig = {
  apikey: 'eebfbcd4-1652-43cc-be7f-e90ff0e9e220',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    HeaderComponent,
    SinglePostComponent,
    FooterComponent,
    MainContentComponent,
    ArticleComponent,
    SidebarComponent,
    SubscribeSectionComponent,
    BlogComponent,
    BlogArticleComponent,
    ColorfulDirective,
    TrendingArticlesComponent,
    TrendingArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    SwiperModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [SignInComponent, SignUpComponent],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule {}