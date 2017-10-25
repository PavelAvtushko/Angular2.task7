import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'search-form',
	templateUrl: 'search-form.component.html',
	styles: [require('./search-form.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent {
	@Output() public showForm: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() public findCourses: EventEmitter<string> = new EventEmitter<string>();

	public keyPhrase: string;

	constructor() {
	}

	public sendRequest(): void {
		if (this.keyPhrase) {
			this.findCourses.emit(this.keyPhrase);
			this.keyPhrase = '';
		}

	}

	public onShowForm(): void {
		this.showForm.emit(true);
	}
}
