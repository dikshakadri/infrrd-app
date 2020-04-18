import { Component, OnInit } from '@angular/core';
import { faUsers, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Teams } from '../models/employee.model';
@Component({
  selector: 'infrrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUsers = faUsers;
  faAngleDown = faAngleDown;
  teams = Teams;

  constructor() { }

  ngOnInit(): void {
  }

}
