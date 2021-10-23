import { Component } from '@angular/core';
import { getPosts } from './posts.service';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  constructor(){
   
  }
}
