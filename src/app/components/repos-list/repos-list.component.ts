import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ghb-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent {
  @Input() repos: any;
  @Input() totalCount: number;
  @Output() pageEvent = new EventEmitter<any>();

  pageSizeOptions = [5, 10, 20, 30];

  constructor() { }

  onPageEvent(page) {
    this.pageEvent.emit(page);
  }
}
