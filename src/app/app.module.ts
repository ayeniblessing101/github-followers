import { MyErrorHandler } from './common/error-handler';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers/github-followers.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home-component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { HelloComponent } from './hello.component';
import { ChangePasswordComponent } from './change-password-form/change-password-form.component';
// import { BlogArchiveRoutingModule } from './blog-archive/blog-archive.routing.module';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';
import { BlogArchiveDetailComponent } from './blog-archive-detail/blog-archive-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    HelloComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostComponent,
    BlogArchiveComponent,
    BlogArchiveDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BlogArchiveRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:userId/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostComponent },
      { path: 'archives/:year/:month', component: BlogArchiveDetailComponent },
      { path: 'archives', component: BlogArchiveComponent },
      { path: '**', component: NotFoundComponent }
    ]),
  ],
  providers: [PostService, GithubFollowersService, { provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
