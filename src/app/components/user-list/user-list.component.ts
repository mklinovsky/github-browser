import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ghb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() searchResult: any;

  constructor() { }

  ngOnInit() {
  }

}
