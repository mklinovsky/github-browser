import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ghb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() searchResult: any;
  @Input() page: number;
  @Input() pageSize: number;

  @Output() pageEvent = new EventEmitter<any>();

  pageSizeOptions = [5, 10, 20, 30];

  constructor() { }

  onPageEvent(page) {
    this.pageEvent.emit(page);
  }
}
