import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskslistComponent } from './taskslist/taskslist.component';
import {taskrouting} from './tasks.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    taskrouting
  ],
  declarations: [TaskslistComponent]
})
export class TasksModule { }
