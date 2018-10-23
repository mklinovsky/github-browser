import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ghb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: any;
  @Input() totalCount: number;
  @Input() title: string;
  @Output() pageEvent = new EventEmitter<any>();

  pageSizeOptions = [5, 10, 20, 30];

  constructor(
    private router: Router
  ) { }

  onPageEvent(page) {
    this.pageEvent.emit(page);
  }

  handleUserClick(login: string) {
    this.router.navigate([`/user/${login}`]);
  }
}
