import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserComponent } from './app.user.component';
import { routing } from './app.user.routing';
import { UserdetailsComponent } from './userDetails/userdetails.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppUserComponent,
    UserdetailsComponent
  ],
  imports: [
    routing ,
    CommonModule,DataTableModule,SharedModule
  ],
  providers: []
})
export class AppUserModule { }
