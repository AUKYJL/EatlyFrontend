import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { headers } from '../shared/consts/consts';
import {
	CommentType,
	IComment,
	ICreateComment,
	IUpdateComment,
} from '../types/types';

@Injectable()
export class CommentsService {
	constructor(private http: HttpClient) {}
	public limit = 0;
	public page = 0;
	public countPagesSubject = new BehaviorSubject<number>(0);
	public type = CommentType.restaurant;
	public entityId = 0;
	public commentForm = new FormGroup({
		title: new FormControl('', Validators.required),
		message: new FormControl('', Validators.required),
		rate: new FormControl(1, [
			Validators.required,
			Validators.min(1),
			Validators.max(5),
		]),
	});
	public editCommentSubject = new Subject();
	public editComment$ = this.editCommentSubject.asObservable();
	public editingComment: IComment | null = null;

	private BASE_URL = `${environment.apiUrl}/comments`;
	private commentsSubject = new BehaviorSubject<IComment[]>([]);
	public comments$ = this.commentsSubject.asObservable();
	public isEditing = false;

	public init(
		limit: number,
		page: number,
		type: CommentType,
		entityId: number
	) {
		this.limit = limit;
		this.page = page;
		this.type = type;
		this.entityId = entityId;
	}

	public resetCommentForm(
		title: string = '',
		message: string = '',
		rate: number = 1
	) {
		this.commentForm.reset({
			message,
			title,
			rate,
		});
	}

	public getComments() {
		this.getAllWithPagination(
			this.type,
			this.entityId,
			this.limit,
			this.page
		).subscribe((comments) => {
			this.commentsSubject.next(comments);
		});
		this.getAll(this.type, this.entityId).subscribe((comments) => {
			this.countPagesSubject.next(Math.ceil(comments.length / this.limit));
		});
	}

	public create(comment: ICreateComment) {
		return this.http.post<ICreateComment>(this.BASE_URL, comment, {
			headers: headers,
		});
	}

	public update(commentId: number, comment: IUpdateComment) {
		return this.http.patch<IUpdateComment>(
			`${this.BASE_URL}/${commentId}`,
			comment,
			{ headers: headers }
		);
	}

	public getById(commentId: number) {
		return this.http.get<IComment>(`${this.BASE_URL}/${commentId}`, {
			headers: headers,
		});
	}

	public getAll(type: CommentType, entityId: number) {
		return this.http.get<IComment[]>(
			`${this.BASE_URL}?type=${type}&entityId=${entityId}`,
			{ headers: headers }
		);
	}

	public getAllWithPagination(
		type: CommentType,
		entityId: number,
		limit: number,
		page: number
	) {
		return this.http.get<IComment[]>(
			`${this.BASE_URL}/pagination?type=${type}&entityId=${entityId}&limit=${limit}&page=${page}`,
			{ headers: headers }
		);
	}

	public rate(commentId: number, newRate: number) {
		return this.http.patch(
			`${this.BASE_URL}/rate/${commentId}?newRate=${newRate}`,
			{},
			{ headers: headers }
		);
	}

	public delete(commentId: number) {
		return this.http.delete(`${this.BASE_URL}/${commentId}`);
	}
}
