import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppUserComponent} from './users/app.user.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'user', loadChildren: './users/app.user.module#AppUserModule' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
