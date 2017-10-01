import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import {Http, RequestOptions, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
userName:any;

  constructor(private _activatedrouter: ActivatedRoute) { 
  	this._activatedrouter.params.subscribe(
        params =>{
            this.userName = params['id'];
        }
    );
    console.log(this.userName);
  }

  ngOnInit() {
  	 
  }

}
