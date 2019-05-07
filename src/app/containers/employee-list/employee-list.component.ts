import { Component, OnInit } from '@angular/core';
import { EditDialogDataComponent } from '../../components/edit-dialog-data/edit-dialog-data.component';
import { MatDialog } from '@angular/material';

import { LocalStorageService } from '../../services/localStorage.service';

export interface Employee {
  id: number;
  username: string;
  phone: string;
  role: string;
  name: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  fields: string[] = ['ID', 'USERNAME', 'PHONE', 'ROLE', 'NAME'];
  employees: Employee[];

  constructor(public dialog: MatDialog, public storageService: LocalStorageService) { }

  ngOnInit() {
    this.employees = this.storageService.get('employees');
    if (!this.employees) {
      this.employees = [];
    }
  }

  onAddEmployee(employee: Employee) {
    this.employees = [
      ...this.employees,
      {
        id: this.employees.length > 0
            ? this.employees[this.employees.length - 1].id + 1
            : 1,
        ...employee
      }
    ];
    this.storageService.set('employees', this.employees);
  }

  onDeleteEmployee(employeeId: string): void {
    const filteredEmployees = this.employees
        .filter(employee => employee.id !== Number(employeeId));
    this.employees = filteredEmployees;
    this.storageService.set('employees', this.employees);
  }

  onEditEmployee(updatedEmployee): void {
    const prevEmployees = this.employees;
    this.employees = [
      ...prevEmployees.filter(prevEmployee => prevEmployee.id !== Number(updatedEmployee.id)),
      updatedEmployee
    ].sort((employeeA, employeeB) => (employeeA.id - employeeB.id));
    this.storageService.set('employees', this.employees);
  }

  onShowModal(employeeId: string): void {
    const selectedEmployee = this.employees.filter(employee => employee.id === Number(employeeId))[0];
    const employeeSelId = selectedEmployee.id;
    const dialogRef = this.dialog.open(EditDialogDataComponent, {
      width: '230px',
      data: {
        employee: selectedEmployee,
        phoneList: this.employees
            .filter(employee => employee.id !== Number(employeeSelId))
            .map(employee => employee.phone)
      }
    });

    dialogRef.afterClosed().subscribe(data => (!!data && this.onEditEmployee(data)));
  }
}
