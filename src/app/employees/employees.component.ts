import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'infrrd-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  public employees: Employee[];
  private subscription: Subscription = new Subscription();
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.empService.employeeData;
    this.subscription = this.empService.listenEmployeeFilter().subscribe((data) => {
      if (data['teamkey'])
        this.employees = this.empService.getEmployeeByTeam(data['teamkey']);
      else if (data['BLR'])
      this.employees = this.empService.getEmployeeByLoc(data);
      else
        this.employees = this.empService.getEmployeeBySearch(data);
    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCheck(event: any) {
    if(event.currentTarget.checked){
      this.empService.triggerEmployeeFilter({ 'BLR':'Bangalore' });
    } else {
      this.employees = this.empService.employeeData;
    }
  }

}
