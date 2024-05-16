import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FormService {
	constructor() {}

	public form?: FormGroup;
	public canLeave$ = new Subject<boolean>();
	public active = false;
}
