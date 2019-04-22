import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { uniquePhone } from '../../validators/phone.validator';
import { Employee } from '../../containers/employee-list/employee-list.component';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})

export class AddEmployeeFormComponent implements OnInit, OnChanges {
  @Input() employees: Employee[];
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  public username: AbstractControl;
  public phone: AbstractControl;
  public role: AbstractControl;
  public name: AbstractControl;
  public invalidPhoneList: string[];

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
    // this.onFormChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.employees);
    if (typeof(changes.employees.previousValue) !== 'undefined' && changes.employees && changes.employees.currentValue) {
      console.log('enter');
      this.invalidPhoneList = changes.employees.currentValue.map(employee => employee.phone);
      this.employeeAdd.get('phone').setValidators(
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
          uniquePhone(this.invalidPhoneList)
        ]
      );
    }
  }

  onFormChanges() {
    this.employeeAdd.valueChanges.subscribe(val => {
      console.log(val);
      this.employeeAdd.get('phone').setValidators(
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
          uniquePhone(this.invalidPhoneList)
        ]
      );
    });
  }

  onClickAddBtn() {
    this.addEmployee.emit(this.employeeAdd.value);
    this.employeeAdd.reset();
    this.employeeAdd.get('phone').setValidators(
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
        uniquePhone(this.invalidPhoneList)
      ]
    );
  }

  public initEmployeeAddForm(): void {
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
          uniquePhone(this.invalidPhoneList)
        ]
      ],
      role: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
}

