import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentsBySerieSubject = new Subject<Comment[]>();

  // commentsSubject = new Subject<Comment[]>();

  private comments: Comment[];

  constructor() {
    this.comments = [
      {
        id: 1,
        author: 'toto',
        content: 'contenu commentaire',
        date: '2020-02-04',
        serieId: 1
      },
      {
        id: 2,
        author: 'tata',
        content: 'contenu commentaire n 2',
        date: '2020-02-04',
        serieId: 1
      },
      {
        id: 3,
        author: 'toto',
        content: 'contenu commentaire 3',
        date: '2020-02-04',
        serieId: 2
      },
      {
        id: 4,
        author: 'tata',
        content: 'contenu commentaire n 5',
        date: '2020-02-04',
        serieId: 2
      }
    ];
  }

  emitCommentBySerieSubject(serieId: number): void {
    this.commentsBySerieSubject.next(this.comments.filter((comment) => comment.serieId === serieId));
  }

  addComment(serieId, data): void {
    const id = this.getLastId() + 1;
    this.comments.push({
      id,
      author: data.author,
      content: data.content,
      date: new Date().toISOString(),
      serieId
    });
    this.emitCommentBySerieSubject(serieId);
  }

  deleteComment(comment: Comment): void {
    const index = this.comments.findIndex((c) => {
      return c.id === comment.id;
    });
    if (index > -1) {
      this.comments.splice(index, 1);
    }
    this.emitCommentBySerieSubject(comment.serieId);
  }

  getLastId(): number {
    let lastId = 0;
    this.comments.forEach((comment) => {
      if (lastId < comment.id) {
        lastId = comment.id;
      }
    });
    return lastId;
  }
}
