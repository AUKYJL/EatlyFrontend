import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentsService } from 'src/app/services/comments.service';
import { SharedService } from 'src/app/services/shared.service';
import { CommentType } from 'src/app/types/types';

@Component({
	selector: 'app-comments-section',
	templateUrl: './comments-section.component.html',
	styleUrls: ['./comments-section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsSectionComponent implements OnInit, OnDestroy {
	constructor(
		private commentsService: CommentsService,
		private sharedService: SharedService
	) {}

	@Input({ required: true }) type!: CommentType;
	@Input({ required: true }) entityId!: number;

	@ViewChild('writeComment', { read: ElementRef })
	writeComment!: ElementRef<HTMLDivElement>;
	private sub = new Subscription();

	ngOnInit(): void {
		this.sub = this.commentsService.editComment$.subscribe(() => {
			this.scrollToWriteComment();
		});
	}

	private scrollToWriteComment() {
		const header = this.sharedService.header;
		const rect = this.writeComment.nativeElement.getBoundingClientRect();
		const scrollTop = document.documentElement.scrollTop;
		const someHeight = 100;
		const top =
			rect.top + scrollTop - header.nativeElement.offsetHeight - someHeight;
		window.scrollTo({ top: top, behavior: 'smooth' });
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
