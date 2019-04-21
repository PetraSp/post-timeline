import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { EmployeeListComponent} from './containers/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditDialogDataComponent } from './components/edit-dialog-data/edit-dialog-data.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';

@NgModule({

  entryComponents: [EmployeeListComponent, EditDialogDataComponent],
  declarations: [
    AppComponent,
    PostComponent,
    EmployeeListComponent,
    TimelineComponent,
    EmployeeComponent,
    EditDialogDataComponent,
    AddEmployeeFormComponent,
    AddPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
