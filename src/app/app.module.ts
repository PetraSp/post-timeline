import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostComponent} from './components/post/post.component';
import {TimelineComponent} from './containers/timeline/timeline.component';
import {EmployeeListComponent} from './containers/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EmployeeListComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
