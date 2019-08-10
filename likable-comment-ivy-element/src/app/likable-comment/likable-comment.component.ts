import { Component, Input } from '@angular/core';

@Component({
  selector: 'ivy-likable-comment',
  templateUrl: './likable-comment.component.html',
})
export class LikableCommenComponent {
  @Input() text: string;
  author: string;
  likes: number;
  likedByMe: boolean;
}
