import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {
  DepartmentsArray, TeamsArray,
  LocationArray, YearOfJoinArray, ExperienceArray,
  DesignationArray, RolesArray
} from '../models/employee.model';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'infrrd-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  filterForm: FormGroup;
  departments = DepartmentsArray;
  roleTypes = RolesArray;
  designations = DesignationArray;
  exps = ExperienceArray;
  yojs = YearOfJoinArray;
  locations = LocationArray;
  teams = TeamsArray;
  constructor() {
    this.filterForm = this.createFormGroup()
  }

  ngOnInit(): void {
    console.log(this.departments);
    // this.filterForm.controls.department.setValue(this.departments.FrontendDevelopment);

    this.filterForm.setValue({
      department: this.departments[0],
      roleType: this.roleTypes[0],
      designation: this.designations[0],
      exp: this.exps[0],
      yoj: this.yojs[0],
      location: this.locations[0],
      team: this.teams[0]
    });
  }

  createFormGroup() {
    return new FormGroup({
      department: new FormControl(),
      roleType: new FormControl(),
      designation: new FormControl(),
      exp: new FormControl(),
      yoj: new FormControl(),
      location: new FormControl(),
      team: new FormControl(),
    })
  }

  onSubmit() {
    console.log(this.filterForm);
  }

}
