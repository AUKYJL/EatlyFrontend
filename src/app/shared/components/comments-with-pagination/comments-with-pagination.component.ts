import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentType } from 'src/app/types/types';

@Component({
  selector: 'app-comments-with-pagination',
  templateUrl: './comments-with-pagination.component.html',
  styleUrls: ['./comments-with-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsWithPaginationComponent implements OnInit {
  constructor(public commentsService: CommentsService) {}

  @Input({ required: true }) type!: CommentType;
  @Input({ required: true }) entityId!: number;

  public page = 1;
  public limit = 3;

  ngOnInit(): void {
    this.commentsService.init(this.limit, this.page, this.type, this.entityId);
    this.commentsService.getComments();
  }

  public handleOnChangePage(page: number) {
    this.commentsService.page = page;
    this.commentsService.getComments();
  }

  public handleNewRate() {
    this.commentsService.getComments();
  }
}
