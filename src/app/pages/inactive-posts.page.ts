import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts, updatePost } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card [post]="post" *ngIf="!post.active">
          <button (click)="onActivePost(post.id, i)" class="btn btn-primary">
            Attiva
          </button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor() {}

  async ngOnInit() {
    const posts = await getPosts();
    this.posts = posts;
    // console.log(this.posts);
  }

  onActivePost(id: number, i: number) {
    updatePost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}
