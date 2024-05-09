import { AngularEditorConfig } from '@kolkov/angular-editor';

export const editorConfig: AngularEditorConfig = {
	editable: true,
	spellcheck: true,
	height: 'auto',
	minHeight: '0',
	maxHeight: 'auto',
	width: 'auto',
	minWidth: '0',
	translate: 'yes',
	enableToolbar: true,
	showToolbar: true,
	placeholder: 'Enter text here...',
	defaultParagraphSeparator: '',
	defaultFontName: 'Poppins',
	defaultFontSize: '',
	fonts: [
		{ class: 'poppins', name: 'Poppins' },
		{ class: 'times-new-roman', name: 'Times New Roman' },
		{ class: 'inter', name: 'Inter' },
		{ class: 'manrope', name: 'Manrope' },
	],
	toolbarHiddenButtons: [
		[],
		[
			'customClasses',
			'backgroundColor',
			'insertImage',
			'insertVideo',
			'insertHorizontalRule',
		],
	],
};
