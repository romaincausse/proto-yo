import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {

  @Input() serieId: number;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    this.commentService.addComment(this.serieId, form.value);
  }

}
