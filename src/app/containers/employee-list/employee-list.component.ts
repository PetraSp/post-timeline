import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';


export interface Employee {
  id: number;
  username: string;
  phone: number;
  role: string;
  name: string;
}

const ELEMENT_DATA: Employee[] = [
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
  displayedColumns: string[] = ['id', 'username', 'phone', 'role', 'name'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
