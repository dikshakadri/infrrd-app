import { Component, OnInit } from '@angular/core';
import { faEnvelope, faSearch, faUser, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
