import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikableCommentComponent } from './likable-comment.component';
import { By } from '@angular/platform-browser';

describe('LikableCommentComponent', () => {
  let component: LikableCommentComponent;
  let fixture: ComponentFixture<LikableCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikableCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikableCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Liked Comment', () => {
    beforeEach(() => {
      component.text = 'Yellow submarine';
      component.text = 'paul_mccartney';
      component.likes = 15;
      component.liked = true;
      fixture.detectChanges();
    });

    it('should has liked class', () => {
      const likesElement = fixture.debugElement.query(By.css('liked'));
      expect(likesElement).toBeDefined();
    });
  });

  describe('Not liked Comment', () => {

    beforeEach(() => {
      component.text = 'Yellow submarine';
      component.text = 'paul_mccartney';
      component.likes = 15;
      component.liked = false;
      fixture.detectChanges();
    });

    it('should has liked class', () => {
      const likesElement = fixture.debugElement.query(By.css('liked'));
      expect(likesElement).toBeNull();
    });
  });

});
