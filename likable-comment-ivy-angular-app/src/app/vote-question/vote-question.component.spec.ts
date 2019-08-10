import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoteQuestionComponent } from './vote-question.component';
import { CommentService } from '../core/services';
import { CommentServiceMock } from '../core/testing';
import { LikableCommentComponent } from './likable-comment/likable-comment.component';

describe('VoteQuestionComponent', () => {
  let component: VoteQuestionComponent;
  let fixture: ComponentFixture<VoteQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteQuestionComponent, LikableCommentComponent ],
      providers: [        {
        provide: CommentService,
        useClass: CommentServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display comments', () => {
    const commentComponents = fixture.debugElement.queryAll(By.directive(LikableCommentComponent));
    expect(commentComponents.length).toBe(2);
  });
});
