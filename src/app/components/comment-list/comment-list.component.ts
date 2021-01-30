import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];

  @Input() serieId: number;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.commentsBySerieSubject.subscribe((comments) => {
      this.comments = comments;
    });
    this.commentService.emitCommentBySerieSubject(this.serieId);
  }

  deleteComment(comment: Comment): void {
    this.commentService.deleteComment(comment);
  }
}
