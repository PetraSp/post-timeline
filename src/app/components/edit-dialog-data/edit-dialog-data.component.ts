import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { Employee } from '../../containers/employee-list/employee-list.component';
import { uniquePhone } from '../../validators/phone.validator';

export interface EditDialogData {
  employee: Employee;
  phoneList: string[];
}

@Component({
  selector: 'app-edit-dialog-data',
  templateUrl: './edit-dialog-data.component.html',
  styleUrls: ['./edit-dialog-data.component.css']
})
export class EditDialogDataComponent implements OnInit {
  public username: AbstractControl;
  public phone: AbstractControl;
  public role: AbstractControl;
  public name: AbstractControl;

  public employeeDetail: FormGroup;

  confirmValidMatcher = new ErrorStateMatcher();
  errors: { [key: string]: string } = {
    username: 'Username is required and must not contain special characters',
    phone: 'This phone is invalid',
    role: 'Role is required',
    name: 'Name is required',
  };

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: EditDialogData,
      private dialogRef: MatDialogRef<EditDialogDataComponent>,
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initEmployeeDetailForm();
  }

  save() {
    this.dialogRef.close(
    {
        id: this.data.employee.id,
        ...this.employeeDetail.value
      }
    );
  }

  public initEmployeeDetailForm(): void {
    const { phoneList } = this.data;
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
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
          uniquePhone(phoneList)
        ]
      ],
      role: [role, Validators.required],
      name: [name, Validators.required]
    });
  }
}

