import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PostListViewComponent, PostViewComponent} from "./components/posts";
import {CategoryPostsComponent} from "./components/categories";
import {HomeComponent} from "./components/home";
import {CategoryService, PostService} from "./components/services";
import {TopBarComponent} from "./components/top-bar";
import {FooterComponent} from "./components/footer";
import {HttpClientModule} from "@angular/common/http";
import {FirstLettersPipe} from "./components/pipes/firstletters.pipe";
import {LastLettersPipe} from "./components/pipes/lastletters.pipe";
import {AceEditorModule} from "ng2-ace-editor";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {SubscribeFormComponent} from "./components/subscribe";

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    CategoryPostsComponent,
    TopBarComponent,
    FooterComponent,
    PostListViewComponent,
    PostViewComponent,
    HomeComponent,
    SubscribeFormComponent,
    FirstLettersPipe,
    LastLettersPipe
  ],
  imports: [
    AceEditorModule,
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'post-view/:categoryId/:postId',
        component: PostViewComponent
      },
      {
        path: 'category-posts/:categoryId',
        component: CategoryPostsComponent
      },
      {path: '', component: HomeComponent},
      // otherwise redirect to home
      {path: '**', redirectTo: ''}
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    CategoryService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
