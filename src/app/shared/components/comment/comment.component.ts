import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from 'src/app/services/comments.service';
import { PopupService } from 'src/app/services/popup.service';
import { IComment } from 'src/app/types/types';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
	constructor(
		public auth: AuthService,
		private commentsService: CommentsService,
		private popupService: PopupService,
		private toastService: ToastService
	) {
		this.userId = auth.checkAuth()?.id ?? null;
	}
	public userId: number | null = null;
	public moreIsActive = false;
	@Input() short: boolean = false;
	@Input({ required: true }) comment!: IComment;

	ngOnInit(): void {}

	public toggleMore() {
		this.moreIsActive = !this.moreIsActive;
	}

	public deleteComment() {
		this.popupService.actionYes = () => this.deleteFunction();
		this.popupService.message = 'Your comment will be deleted';
		this.popupService.isAreYouSurePopupActive = true;
	}
	public deleteFunction() {
		this.commentsService.delete(this.comment.id).subscribe(() => {
			this.commentsService.getComments();
			this.toastService.error('Comment was deleted');
		});
	}

	public editComment() {
		this.commentsService.editCommentSubject.next({});
		this.commentsService.commentForm.reset({
			message: this.comment.message,
			title: this.comment.title,
			rate: this.comment.rate,
		});
		this.commentsService.editingComment = this.comment;
		this.commentsService.isEditing = true;

		this.popupService.form = this.commentsService.commentForm;
		this.popupService.message = 'You have unsaved changes';
	}

	public reportComment() {
		this.popupService.isReportPopupActive = true;
	}
}
