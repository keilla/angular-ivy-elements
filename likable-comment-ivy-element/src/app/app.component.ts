import { Component, Input, ɵrenderComponent, ɵdetectChanges, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { LikableCommenComponent } from './likable-comment/likable-comment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  component: LikableCommenComponent;

  constructor(public element: ElementRef) {
    this.component = ɵrenderComponent(LikableCommenComponent, {host: this.element.nativeElement});
  }

  get text() {
    return this.component.text;
  }

  @Input() set text(value: string) {
    this.component.text = value;
    ɵdetectChanges(this.component);
  }

  get author() {
    return this.component.author;
  }

  @Input() set author(value: string) {
    this.component.author = value;
    ɵdetectChanges(this.component);
  }

  get likes() {
    return this.component.likes;
  }

  @Input() set likes(value: number) {
    this.component.likes = value;
    ɵdetectChanges(this.component);
  }

  get liked() {
    return this.component.liked;
  }

  @Input() set liked(value: boolean) {
    this.component.liked = value;
    ɵdetectChanges(this.component);

  }
}


