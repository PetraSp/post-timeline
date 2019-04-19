import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export interface Employee {
  id: number;
  username: string;
  phone: number;
  role: string;
  name: string;
}

export interface EditDialogData {
  employee: Employee;
}

const employees: Employee[] = [
  {id: 1, username: 'mathilde', phone: 992312312, role: 'CEO', name: 'Mathilde Saylors'},
  {id: 2, username: 'alia', phone: 986733445, role: 'Designer', name: 'Alia Ginder'},
  {id: 3, username: 'freeman', phone: 971232343, role: 'Developer', name: 'Freeman Litten'},
  {id: 4, username: 'piedad', phone: 992362345, role: 'Sales', name: 'Piedad Dewald'},
  {id: 5, username: 'beau', phone: 912342303, role: 'PR', name: 'Beau Siegel'},
];


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  fields: string[] = ['ID', 'USERNAME', 'PHONE', 'ROLE', 'NAME'];
  employees: Employee[] = employees;

  public username: AbstractControl;
  public phone: AbstractControl;
  public role: AbstractControl;
  public name: AbstractControl;

  public employeeAdd: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors: { [key: string]: string } = {
    username: 'Username is required and must not contain special characters',
    phone: 'This phone is invalid',
    role: 'Role is required',
    name: 'Name is required',
  };

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initEmployeeAddForm();
  }

  onAddEmployee(event) {
    this.employees.push(
      {
        id: this.employees.length > 0
          ? this.employees[this.employees.length - 1].id + 1
          : 1,
        username: event.target[0].value,
        phone: event.target[1].value,
        role: event.target[2].value,
        name: event.target[3].value
      }
    );
  }

  onDeleteEmployee(employeeId: 'string'): void {
    const employeeIndex = employees.findIndex(employee => employee.id === Number(employeeId));
    this.employees.splice(employeeIndex, 1);
  }

  onShowModal(employeeId: 'string'): void {
    this.dialog.open(EmployeeDetailComponent, {
      width: '230px',
      data: {
        employee: employees.filter(employee => employee.id === Number(employeeId))[0]
      }
    });
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
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
        ]
      ],
      role: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog-data.html',
  styleUrls: ['./edit-dialog-data.css']
})

export class EmployeeDetailComponent implements OnInit {
  public username: AbstractControl;
  public phone: AbstractControl;
  public role: AbstractControl;
  public name: AbstractControl;

  public employeeDetail: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors: { [key: string]: string } = {
    username: 'Username is required and must not contain special characters',
    phone: 'This phone is invalid',
    role: 'Role is required',
    name: 'Name is required',
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: EditDialogData,  private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initEmployeeDetailForm();
  }

  onSubmit() {
    // TODO: Add Update Logic
  }

  public initEmployeeDetailForm(): void {
    const { username, phone, role, name } = this.data.employee;
    this.employeeDetail  =  this.fb.group({
      username: [
        username,
        [
          Validators.required,
          Validators.pattern('[\\w-_]+')
        ]
      ],
      phone: [
        phone,
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
        ]
      ],
      role: [role, Validators.required],
      name: [name, Validators.required],
    });
  }
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.touched;
  }
}
