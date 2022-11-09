import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
