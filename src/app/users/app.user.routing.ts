import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppUserComponent} from './app.user.component';
import {UserdetailsComponent} from './userDetails/userdetails.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '', component: AppUserComponent },
  { path: 'detail/:id', component : UserdetailsComponent},

  // {
  //   path: 'user',
  //   children: [
  //     {
  //       path: 'users/:id', 
  //       component: UserdetailsComponent,
  //     },
  //   ]
  // }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
