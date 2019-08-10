import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentService } from './comment.service';

describe('CommentsService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;

  const comment = {
    text: 'Yellow submarine',
    author: 'paul_mccartney',
    likes: 15,
    liked: true
  };

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [CommentService],
        imports: [HttpClientTestingModule]
      });
      service = TestBed.get(CommentService);
      httpMock = TestBed.get(HttpTestingController);
    });

  it('should return comments list', (done) => {
    const $comments = service.getComments();
    $comments.subscribe(comments => {
      expect(comments).toEqual([comment]);
      done();
    });

    const http = httpMock.expectOne('/assets/data/comments.json');
    expect(http.request.method).toBe('GET');
    http.flush([comment]);
  });
});
