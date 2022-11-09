import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from './shared/shared.module';

const routes:Route[] = [
  // {
  //   path:"",
  //   component:HomePage
  // },
  // {
  //   path:"active-posts",
  //   component:ActivePostsPage
  // },
  // {
  //   path:"inactive-posts",
  //   component:InactivePostsPage
  // },
  // {
  //   path:"active-posts/:id",
  //   component:PostDetailsPage
  // },
  // {
  //   path:"inactive-posts/:id",
  //   component:PostDetailsPage
  // },
  // {
  //   path:"users",
  //   component:UsersPage,
  //   children:[
  //     {
  //       path:":id",
  //       component:UsersDetailsPage
  //     }
  //   ]
  // },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'active-posts', loadChildren: () => import('./pages/active-posts/active-posts.module').then(m => m.ActivePostsModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'inactive-post', loadChildren: () => import('./pages/inactive-post/inactive-post.module').then(m => m.InactivePostModule) },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
