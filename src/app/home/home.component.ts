import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'infrrd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isFilterOpen: boolean = false;
  constructor(public empService: EmployeeService) {
  }

  ngOnInit(): void {
  }
  

}
