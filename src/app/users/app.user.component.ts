import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../GlobalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.user.component.html',
  styleUrls: ['./app.user.component.css']
})
export class AppUserComponent {
  Items:any[];	
  title = 'app';
  value :any;
  private anyErrors: boolean;
  private finished: boolean;
  subject:any;
  cols:any;
  dataTableValues:any;


  constructor(private router:Router,private global_service : GlobalService){
  	this.Items=['kunvar','pardeep','akak','mansi','arun'];
  	 this.cols = [
            {field: 'Name', header: 'Name'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'CollegeName', header: 'College Name'}
      ];

    this.dataTableValues=[{Name:'kunvar singh',year:2017,brand:12,CollegeName:'IIMT Engineering College'}];  

  	this.global_service.variableObs.subscribe(res => {
  	console.log(res);
    })

  }

  seeDetails(itemName){
  	this.router.navigateByUrl('user/detail/'+itemName);
  }
}
