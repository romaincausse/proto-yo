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
        date: '12/10/2020',
        serieId: 1
      },
      {
        id: 2,
        author: 'tata',
        content: 'contenu commentaire n 2',
        date: '05/20/2020',
        serieId: 1
      },
      {
        id: 3,
        author: 'toto',
        content: 'contenu commentaire 3',
        date: '12/10/2020',
        serieId: 2
      },
      {
        id: 4,
        author: 'tata',
        content: 'contenu commentaire n 5',
        date: '07/10/2020',
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
