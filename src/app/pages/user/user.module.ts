import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDetailsPage } from './users-details.page';


const routes: Routes = [
  { path: '', component: UsersPage,
  children:[
    {
      path:":id",
      component:UsersDetailsPage
    }
  ] }
];

@NgModule({
  declarations: [
    UsersPage,
    UsersDetailsPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule { }
