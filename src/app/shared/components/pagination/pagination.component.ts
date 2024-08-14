import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input({ required: true }) page = 1;
  @Input({ required: true }) countPages = 1;

  @Output() onChangePage = new EventEmitter();

  public nextPage() {
    if (this.page < this.countPages) {
      this.page++;
      this.onChangePage.emit(this.page);
    }
  }
  public prevPage() {
    if (this.page > 1) {
      this.page--;
      this.onChangePage.emit(this.page);
    }
  }
  public openThisPage(id: number) {
    if (id === this.page) return;

    this.page = id;
    this.onChangePage.emit(this.page);
  }
}
