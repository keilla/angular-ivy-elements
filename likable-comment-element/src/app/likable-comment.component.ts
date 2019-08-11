import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './likable-comment.component.html',
  styleUrls: ['./likable-comment.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LikableCommentComponent {
  @Input() text: string;
  @Input() author: string;
  @Input() likes: number;
  @Input() liked: boolean;
}
