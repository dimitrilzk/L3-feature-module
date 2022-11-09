import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActivePostsPage } from './active-posts.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostDetailsPage } from 'src/app/shared/post-details.page';


const routes: Routes = [
  { path: '', component: ActivePostsPage },
  {path: ':id', component: PostDetailsPage}
];

@NgModule({
  declarations: [
    ActivePostsPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ActivePostsModule { }
