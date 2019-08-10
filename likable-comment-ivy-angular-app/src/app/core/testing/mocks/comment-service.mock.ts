import { Observable, of } from 'rxjs';
import { Comment } from '../../models';

export class CommentServiceMock {

  comments = [{
    text: 'Yellow submarine',
    author: 'paul_mccartney',
    likes: 15,
    liked: true
  },
  {
    text: 'I want hold your hand',
    author: 'john_lenon',
    likes: 3,
    liked: false
  }
  ];

  getComments(size?: number ): Observable<Comment[]> {
    return of(this.comments);
  }
}
