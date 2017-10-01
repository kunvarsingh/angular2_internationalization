import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskslistComponent } from './taskslist/taskslist.component';
const routes: Routes = [
  //{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: '', component: TaskslistComponent },
  
];

export const taskrouting: ModuleWithProviders = RouterModule.forChild(routes);
