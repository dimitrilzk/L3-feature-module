import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';


@NgModule({
  declarations: [
    PostCardComponent,
    HighlightDirective,
    MaiuscoloPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostCardComponent,
    HighlightDirective,
    MaiuscoloPipe
  ]
})
export class SharedModule { }
