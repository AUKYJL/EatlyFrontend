import {
	Component,
	ElementRef,
	Input,
	OnDestroy,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentType, ICreateComment } from 'src/app/types/types';

@Component({
	selector: 'app-write-comment',
	templateUrl: './write-comment.component.html',
	styleUrls: ['./write-comment.component.scss'],
})
export class WriteCommentComponent implements OnDestroy {
	@Input({ required: true }) type!: CommentType;
	@Input({ required: true }) entityId!: number;

	constructor(
		private renderer: Renderer2,
		public commentsService: CommentsService,
		private toastService: ToastService
	) {}

	@ViewChild('textarea') textArea!: ElementRef<HTMLTextAreaElement>;

	public hoverRate: number = 0;

	public autoResize() {
		let scrollHeight = this.textArea.nativeElement.scrollHeight;
		this.renderer.setStyle(this.textArea.nativeElement, 'height', `auto`);
		this.renderer.setStyle(
			this.textArea.nativeElement,
			'height',
			`${scrollHeight}px`
		);
	}

	public submit() {
		let comment: ICreateComment;
		switch (this.type) {
			case CommentType.restaurant:
				comment = {
					...this.commentsService.commentForm.value,
					type: this.type,
					restaurantId: this.entityId,
					dishId: null,
				} as ICreateComment;
				break;
			case CommentType.dish:
				comment = {
					...this.commentsService.commentForm.value,
					type: this.type,
					restaurantId: null,
					dishId: this.entityId,
				} as ICreateComment;
				break;
		}
		this.commentsService.create(comment).subscribe({
			next: () => {
				this.successCommentAction('Comment published');
			},
			error: (err) => {
				this.errorCommentAction(err);
			},
		});
	}

	private successCommentAction(message: string) {
		this.commentsService.getComments();
		this.toastService.success(message);
		this.commentsService.resetCommentForm();
	}
	private errorCommentAction(err: any) {
		this.toastService.error(err.error.message);
	}

	public handleNewStarNumber(newStarNumber: number) {
		this.hoverRate = newStarNumber;
	}
	public setNewRate(newRate: number) {
		this.commentsService.commentForm.controls.rate.setValue(newRate);
	}

	public edit() {
		if (this.commentsService.editingComment) {
			const comment = {
				message: this.commentsService.commentForm.value.message!,
				title: this.commentsService.commentForm.value.title!,
				rate: this.commentsService.commentForm.value.rate!,
			};
			this.commentsService
				.update(this.commentsService.editingComment.id, comment)
				.subscribe({
					next: () => {
						this.successCommentAction('Comment edited');
					},
					error: (err) => {
						this.errorCommentAction(err);
					},
				});
		}
	}

	public cancel() {
		this.commentsService.resetCommentForm();
		this.commentsService.editingComment = null;
		this.commentsService.isEditing = false;
	}

	ngOnDestroy(): void {
		this.commentsService.resetCommentForm();
	}
}
