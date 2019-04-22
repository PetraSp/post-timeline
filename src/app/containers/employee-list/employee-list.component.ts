import { Component, OnInit } from '@angular/core';
import { EditDialogDataComponent } from '../../components/edit-dialog-data/edit-dialog-data.component';
import { MatDialog } from '@angular/material';

export interface Employee {
  id: number;
  username: string;
  phone: string;
  role: string;
  name: string;
}

const employees: Employee[] = [
  {id: 1, username: 'mathilde', phone: '992312312', role: 'CEO', name: 'Mathilde Saylors'},
  {id: 2, username: 'alia', phone: '986733445', role: 'Designer', name: 'Alia Ginder'},
  {id: 3, username: 'freeman', phone: '971232343', role: 'Developer', name: 'Freeman Litten'},
  {id: 4, username: 'piedad', phone: '992362345', role: 'Sales', name: 'Piedad Dewald'},
  {id: 5, username: 'beau', phone: '912342303', role: 'PR', name: 'Beau Siegel'},
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  fields: string[] = ['ID', 'USERNAME', 'PHONE', 'ROLE', 'NAME'];
  employees: Employee[] = employees;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

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
  }

  onDeleteEmployee(employeeId: string): void {
    const filteredEmployees = this.employees
        .filter(employee => employee.id !== Number(employeeId));
    this.employees = filteredEmployees;
  }

  onEditEmployee(updatedEmployee): void {
    const prevEmployees = this.employees;
    this.employees = [
      ...prevEmployees.filter(prevEmployee => prevEmployee.id !== Number(updatedEmployee.id)),
      updatedEmployee
    ].sort((employeeA, employeeB) => (employeeA.id - employeeB.id));
  }

  onShowModal(employeeId: string): void {
    const selectedEmployee = employees.filter(employee => employee.id === Number(employeeId))[0];
    const employeeSelId = selectedEmployee.id;
    const dialogRef = this.dialog.open(EditDialogDataComponent, {
      width: '230px',
      data: {
        employee: selectedEmployee,
        phoneList: employees
            .filter(employee => employee.id !== Number(employeeSelId))
            .map(employee => employee.phone)
      }
    });

    dialogRef.afterClosed().subscribe(data => (!!data && this.onEditEmployee(data)));
  }
}
