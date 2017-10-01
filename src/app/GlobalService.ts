import { Injectable } from '@angular/core';
import { Route, Router } from "@angular/router";
import { FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {

	public user_info: any;
	public base_path: string;
	public base_path_small_loader: string;
	public user_type: string = "none";
	public userid: any;
	public token: any;
	public global_user_name:string;
	public requestOptionObj: RequestOptions;

	public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;

    public txt_pattern: string;
	public name_pattern: string;
    public number_pattern: string;
    public email_pattern: string;
    public password_pattern: string;

    public txt_pattern_msg: string;
    public pax_pattern_msg: string;
    public venue_pattern_msg: string;
    public event_pattern_msg: string;
    public special_pattern_msg: string;
	public name_pattern_msg: string;
    public number_pattern_msg: string;
    public email_pattern_msg: string;
    public password_pattern_msg: string;
    public cnfrm_password_pattern_msg: string;

    public isLoggedIn: boolean;
    public loggedInObs: Rx.Subject<any> = new Rx.Subject<any>();
    public variableObs: Rx.Subject<any> = new Rx.Subject<any>();
    public msg:any;

    public no_image_artist:string;
    public no_image_banner:string;
    public no_image_banner_for_ext_artist:string;
    public no_client_image:string;
    public no_event_type:string;
    public toStateUrl:string; 
  	public isHalfRating:boolean = false;

	constructor(public http: Http,public router: Router) {
		this.initOnLoad();
	}

	initOnLoad(){
		this.txt_pattern = '[a-zA-ZÀ-ÿ0-9._^%$#!@&*][a-zA-ZÀ-ÿ0-9._^%$#!@&* )]{1,150}';
        this.name_pattern = '[a-zA-zÀ-ÿ0-9][a-zA-zÀ-ÿ0-9 ]{1,50}$';
        this.number_pattern = '[0-9]{8,16}$';
        this.email_pattern = '[a-zA-zÀ-ÿ_.0-9]+@[a-zA-ZÀ-ÿ]+[.][a-zA-ZÀ-ÿ.]+';
        this.password_pattern = '[a-zA-ZÀ-ÿ0-9._^%$#!@&*][a-zA-ZÀ-ÿ0-9._^%$#!@&* )]{7,18}';
        // this.password_pattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,18}";

        this.txt_pattern_msg = 'Please enter Company Name between 2 to 50 Characters.';
        this.pax_pattern_msg = 'Please enter PAX between 1 to 6 Digits.';
        this.venue_pattern_msg = 'Please enter Venue between 2 to 150 Characters.';
        this.event_pattern_msg = 'Please enter Event Description between 2 to 150 Characters.';
        this.special_pattern_msg = 'Please enter Special Conditions between 2 to 150 Characters.';
        this.name_pattern_msg = 'Enter your Full Name.';
        this.number_pattern_msg = 'Please enter Phone Number between 8 to 16 Digits.';
        this.email_pattern_msg = 'Enter valid Email Address.';
        this.password_pattern_msg = 'Please enter Password between 8 to 18 Digits.';
        this.cnfrm_password_pattern_msg = 'Enter the Correct Password.';

        this.user_info = JSON.parse(localStorage.getItem('user_info')) || {};
		// this.base_path = "http://site4demo.com/acta/public";
		this.base_path = "http://site4demo.com/celebrity-dev/public";
		// this.base_path = "http://site4demo.com/acta-website/public";
		//this.base_path = 'http://192.168.4.19/acta/public';
		this.base_path_small_loader = "assets/images/preloader_acta.gif";
		//this.no_image_artist="assets/images/no_image_artist.jpg";
		

		this.no_image_artist="assets/images/no_img_artist_img.jpg";
		//this.no_image_banner="assets/images/no_image_banner.jpg";
		//this.no_image_banner="assets/images/no_img_banner_img.jpg"
		
		this.no_image_banner="assets/images/imgpsh_fullsize.jpeg"
		this.no_image_banner_for_ext_artist="assets/images/no_img_exo_artist.jpg";
		this.no_client_image="assets/images/no_img_client-pic.jpg";
		this.no_event_type="assets/images/no_img_evnt_typ_img.jpg";

	  	let userData = JSON.parse(localStorage.getItem('user_info'));
	  	if(userData){
	  		this.userid = userData.id;
		  	this.user_type = userData.role;
	  		this.token = userData.token;
	  		this.global_user_name=userData.name;
	  	}
	  	this.loggedInObs.subscribe(res => {
	  		let userData = JSON.parse(localStorage.getItem('user_info'));
		  	if(userData){
		  		this.userid = userData.id;
		  		this.user_type = userData.role;
		  		this.token = userData.token;
		  		this.global_user_name=userData.name;
		  	}	
	  	})

	  	this.variableObs.subscribe(res =>{
	  		this.msg="ima asdjds"
	  	});
	}

	// public toasterconfig : ToasterConfig = 
 //        new ToasterConfig({
 //            showCloseButton: false, 
 //            tapToDismiss: false, 
 //            timeout:2000
 //        });

	success(title:any,desc:any){
	//this.toasterService.pop('success', title, desc);
	}
	successWithoutTiltle(desc:any){
	//this.toasterService.pop('success', "", desc);
	}
	errorWithoutTitle(desc:any){
	//this.toasterService.pop('error', "", desc);
	}

	error(title:any,desc:any){
	//this.toasterService.pop('error', title, desc);
	}

	clearMessage(){
		//	this.toasterService.clear();
	}
	// Delete , Increment and decrement functions for the cart
    consoleFun(a?, b?, c?, d?, f?, g?): void {
        console.log(a, b, c, d, g);
    }

    range(ratings?){
  //   	let rating = ratings.toString();
		// this.isHalfRating = false;
		// if(rating){ 
		//   if(rating.indexOf(".")!=-1){
		//     this.isHalfRating = true;
		//   }
		//   return Array(parseInt(rating));
		// }
	}
	remainingRange(ratings?){
  //   	let rating = ratings.toString();
		// if(rating){
		//   if(this.isHalfRating){
		//     return Array(4 - parseInt(rating));
		//   }
		//   return Array(5 - parseInt(rating));
		// }
		// else{
		//   return Array(5);
		// }   
	}
/*---------------------------------Generic Get/Post Request for App START--------------------------------*/
	public getRequset(url: string): any {
        let headers;
        headers = new Headers();
		headers.append("Content-Type","application/json");
        if (localStorage.getItem('user_info')) {    
			headers.append("userid",this.userid);
			headers.append("token",this.token);
        }
        else {
            console.log('Unautorized Request !');
        }
        let requestoptions = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: headers,
		});

        // return requestOptionObj;
        return this.http.request(new Request(requestoptions))
			.map((res: Response) => {
				// return [{status: res.status, json: res.json()}]	
				if(res.json().status==200){
					return [{status: res.status, json: res.json()}]	
				}

				else if(res.json().status ==400){
					localStorage.clear();
					this.clearMessage();
					this.error("",res.json().message);
					this.router.navigateByUrl("/login");
				}
				else if(res.json().status ==401){
					this.clearMessage();
					this.error("",res.json().message);
					this.router.navigateByUrl("/login");
				}
				else if(res.json().status==500){
					this.clearMessage();
					this.error("",res.json().message);
				}
				else if(res.json().status==404){
					this.clearMessage();
					this.error("",res.json().message);
				}
				
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
    }

	public PostRequest(url: string, data: any): any {
        let headers;
        headers = new Headers();
        headers.append("Content-Type","application/json");
		if (localStorage.getItem('user_info')) {    
			headers.append("userid",this.userid);
			headers.append("token",this.token);
        }
        else {
            // console.log('Unautorized Request !');
        }
        let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

        return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);	
			});
    }
/*---------------------------------Generic Get/Post Request for App END--------------------------------*/

	public GetArtistListRequest(url: string){

		return this.http.request(url)
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostSignupRquest(url: string,data: any){

		let headers = new Headers();
		headers.append("Content-Type","application/json");

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostLoginRquest(url: string,data: any){
		let headers = new Headers();
		headers.append("Content-Type","application/json");

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostPasswordRquest(url: string,data: any){

		let headers = new Headers();
		headers.append("Content-Type","application/json");

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostUpdatePasswordRequest(url: string, data: any){
		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostUpdateProfileRequest(url: string, data: any){
		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetCategoryListRequest(url: string){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: headers
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetArtistByCategoryIdRequest(url: string, data: any){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);
		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetNewRequest(url: string){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);
		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: headers
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public PostNewRequestDetailById(url: string, data?: any){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);
		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetRequest(url: string){
		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);

		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: headers
		});
		console.log(this.userid, this.token, url);

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				console.log("***********************");
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetArtistByManagerIdRequest(url: string){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);
		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: headers,
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}

	public GetArtistDetailById(url: string, data: any){

		let headers = new Headers();
		headers.append("Content-Type","application/json");
		headers.append("userid",this.userid);
		headers.append("token",this.token);
		let requestOptionObj = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: headers,
			body: JSON.stringify(data)
		});

		return this.http.request(new Request(requestOptionObj))
			.map((res: Response) => {
				return [{status: res.status, json: res.json()}]
			})
			.catch((error: any) =>{
				return Observable.throw(error);
				
			});
	}
}
