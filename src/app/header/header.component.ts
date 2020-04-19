import { Component, OnInit } from '@angular/core';
import { faUsers, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Teams } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'infrrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUsers = faUsers;
  faAngleDown = faAngleDown;
  teams = Teams;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSelect(team: any) {
    this.empService.triggerEmployeeFilter({ 'teamkey': team.key });
  }
}
