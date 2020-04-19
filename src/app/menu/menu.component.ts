import { Component, OnInit } from '@angular/core';
import { faEnvelope, faSearch, faUser, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'infrrd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faEnvelope = faEnvelope;
  faSearch = faSearch;
  faUser = faUser;
  faComment = faComment;
  faSignOutAlt = faSignOutAlt;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.empService.toggleSearch();
  }
}
