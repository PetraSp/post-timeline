import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelineComponent} from './containers/timeline/timeline.component';
import {EmployeeListComponent} from './containers/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  },
  {
    path: 'admin',
    component: EmployeeListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
