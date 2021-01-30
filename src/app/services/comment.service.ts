import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentsSubject = new Subject<Comment[]>();

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
          date: '14/10/2020',
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
        date: '14/10/2020',
        serieId: 2
      }
    ];
  }

  emitCommentSubject(): void {
    this.commentsSubject.next(this.comments.slice());
  }
}
