import { Component, Input } from '@angular/core';

@Component({
  selector: 'likable-comment',
  templateUrl: './likable-comment.component.html',
  styleUrls: ['./likable-comment.component.scss']
})
export class LikableCommentComponent {

  @Input() text: string;
  @Input() author: string;
  @Input() likes: number;
  @Input() liked: boolean;

}
