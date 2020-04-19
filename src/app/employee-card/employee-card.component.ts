import { Component, OnInit, Input } from '@angular/core';
import { faPaperPlane, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'infrrd-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee : Employee;
  faPaperPlane = faPaperPlane;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
