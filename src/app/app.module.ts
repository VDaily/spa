import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";
import { AppRoutingModule } from "./app-routing.module";
import { SwiperModule } from "swiper/angular";

//Material
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";

//Components
import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { HeaderComponent } from "./components/header/header.component";
import { SinglePostComponent } from "./components/single-post/single-post.component";

import { FooterComponent } from "./components/footer/footer.component";
import { MainContentComponent } from "./components/single-post/main-content/main-content.component";
import { ArticleComponent } from "./components/single-post/main-content/article/article.component";
import { SidebarComponent } from "./components/single-post/main-content/sidebar/sidebar.component";
import { SubscribeSectionComponent } from "./components/common/subscribe-section/subscribe-section.component";
import { BlogComponent } from "./components/single-post/blog/blog.component";
import { BlogArticleComponent } from "./components/single-post/blog/blog-article/blog-article.component";
import { TrendingArticlesComponent } from "./components/single-post/main-content/sidebar/trending-articles/trending-articles.component";
import { TrendingArticleComponent } from "./components/single-post/main-content/sidebar/trending-articles/trending-article/trending-article.component";
import { NavMainComponent } from "./components/header/nav-main/nav-main.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { ChartComponent } from "./components/charts/chart/chart.component";
import { MainBlogComponent } from "./components/blog/blog.component";
//Directives
import { ColorfulDirective } from "./directives/colorful/colorful.directive";
import { FullScreenComponent } from "./components/charts/chart/full-screen/full-screen.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { Interceptor } from "./services/interceptor/interceptor";
import { HOST, HostService } from "./services/host/host.service";

const mapConfig: YaConfig = {
  apikey: "eebfbcd4-1652-43cc-be7f-e90ff0e9e220",
  lang: "en_US",
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
    NavMainComponent,
    ChartsComponent,
    ChartComponent,
    FullScreenComponent,
    MainBlogComponent,
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
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  entryComponents: [SignInComponent, SignUpComponent, FullScreenComponent],
  providers: [
    { provide: HOST, useClass: HostService },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
