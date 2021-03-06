import {
  Component,
  OnInit,
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges,
  ElementRef } from '@angular/core';
import { CommentService } from '../core/services';

@Component({
  selector: 'vote-question',
  templateUrl: './vote-question.component.html',
  styleUrls: ['./vote-question.component.scss']
})
export class VoteQuestionComponent implements OnInit {

  question: string;
  comments;

  constructor(private commentService: CommentService, private element: ElementRef) {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
      this.renderCommentComponent();
    });

  }

  ngOnInit() {
    this.question = 'My favorite Sherlock Holmes quote is';
  }

  renderCommentComponent() {
    import('./likable-comment/likable-comment.component')
      .then(({ LikableCommentComponent }) => {
        this.comments.forEach(comment => {
          const comp = renderComponent(LikableCommentComponent, {host: this.element.nativeElement});
          comp.text = comment.text;
          comp.author = comment.author;
          comp.likes = comment.likes;
          comp.liked = comment.liked;
          detectChanges(comp);
        });
      });
  }

}
