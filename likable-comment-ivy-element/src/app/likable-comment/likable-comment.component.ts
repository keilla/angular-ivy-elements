import { Component } from '@angular/core';

@Component({
  selector: 'ivy-likable-comment',
  templateUrl: './likable-comment.component.html',
})
export class LikableCommenComponent {
  text: string;
  author: string;
  likes: number;
  liked: boolean;
}
