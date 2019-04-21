import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { uniquePhone } from '../../validators/phone.validator';
import { Employee } from '../../containers/employee-list/employee-list.component';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})

export class AddEmployeeFormComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  public username: AbstractControl;
  public phone: AbstractControl;
  public role: AbstractControl;
  public name: AbstractControl;

  public employeeAdd: FormGroup;

  confirmValidMatcher = new ErrorStateMatcher();
  errors: { [key: string]: string } = {
    username: 'Username is required and must not contain special characters',
    phone: 'This phone is invalid',
    role: 'Role is required',
    name: 'Name is required',
  };

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initEmployeeAddForm();
  }

  onClickAddBtn() {
    this.addEmployee.emit(this.employeeAdd.value);
  }

  public initEmployeeAddForm(): void {
    const phoneList = this.employees.map(employee => employee.phone);
    this.employeeAdd  =  this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('[\\w-_]+')
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
          uniquePhone(phoneList)
        ]
      ],
      role: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
}

