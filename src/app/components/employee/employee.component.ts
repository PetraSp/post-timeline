import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Employee } from '../../containers/employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() data: Employee[];
  @Output() showModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteEmployee: EventEmitter<string> = new EventEmitter<string>();
  keys: string[];

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.data);
  }

  onClickRow(id: string) {
    this.showModal.emit(id);
  }

  onClickDeleteBtn(event) {
    this.deleteEmployee.emit(event);
  }
}
