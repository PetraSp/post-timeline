import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Employee } from '../../containers/employee-list/employee-list.component';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})

export class AddPostFormComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() addPost: EventEmitter<string> = new EventEmitter<string>();
  public employee: AbstractControl;
  public message: AbstractControl;

  public postAdd: FormGroup;

  confirmValidPMatcher = new ErrorStateMatcher();
  errors: { [key: string]: string } = {
    employee: 'Employee is required',
    message: 'Message is required'
  };

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initPostAddForm();
  }

  onClickAddBtn() {
    this.addPost.emit(this.postAdd.value);
  }

  public initPostAddForm(): void {
    this.postAdd  =  this.fb.group({
      employee: [
        '',
        [
          Validators.required
        ]
      ],
      message: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }
}

