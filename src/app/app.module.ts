import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import {EmployeeDetailComponent, EmployeeListComponent} from './containers/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({

  entryComponents: [EmployeeListComponent, EmployeeDetailComponent],
  declarations: [
    AppComponent,
    PostComponent,
    EmployeeListComponent,
    TimelineComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
