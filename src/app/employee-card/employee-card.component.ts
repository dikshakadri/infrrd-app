import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'infrrd-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
