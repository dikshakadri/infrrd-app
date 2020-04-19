import { Injectable } from '@angular/core';
import { Employee, Teams, Departments } from './models/employee.model';
import { EmployeeData } from './models/mockdata';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeData: Employee[] = EmployeeData;
  public searchFilterOpen = false;
  private employeeFilter$ = new Subject;

  
  public toggleSearch() {
    this.searchFilterOpen = !this.searchFilterOpen;
  }

  public getSearchFilterStatus() {
    return this.searchFilterOpen;
  }

  public triggerEmployeeFilter(data: any) {
    return this.employeeFilter$.next(data);
  }

  public listenEmployeeFilter() {
    return this.employeeFilter$.asObservable();
  }

  public getEmployeeData(data: any): Employee[] {
    return this.employeeData.filter((employee: Employee) => {
    })
  }

  public getEmployeeByTeam(team: any): Employee[] {
    return this.employeeData.filter((employee: Employee) => employee.currentTeam === Teams[team]);
  }

  public getEmployeeBySearch(data: any) {
    return this.employeeData.filter((employee: Employee) => {
      if (employee.currentTeam === Teams[data.team.key] &&
        employee.department === Departments[data.department.key] &&
        employee.roleType === data.roleType.value &&
        employee.designation === data.designation.value &&
        employee.exp === data.exp.value &&
        employee.doj === data.yoj.value &&
        employee.location === data.location.value
      ) {
        return employee;
      }
    })
  }

}
