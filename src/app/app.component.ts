import { Component,Input  } from '@angular/core';
import {GlobalService} from './GlobalService';
import { TranslateService } from './translate/translate.service';
import { LoggingService, Config } from 'loggerservice';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Constant} from './constant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public variableObs: Rx.Subject<any> = new Rx.Subject<any>();
    translatedText: string;
  supportedLanguages: any[];
selectedItem:any;

  title = 'app';
  message = 'Hello';

  constructor(private logger:LoggingService, private global_service : GlobalService,private _translate: TranslateService){
    this.logger.log(this,'We\'re in the template-father-page');

  	 this.supportedLanguages = Constant.LANGUAGES;

  this.selectedItem = this.supportedLanguages[0].display;

  this.selectLang('en'); //set default language here

  this.global_service.variableObs.next(this.message="I am subscribe");

  console.log("Hello: "+Constant.NAME+Constant.READ);
  }

   isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }
    
    selectLang(lang: string):any {
      // set default;
      this._translate.use(lang);
      this.refreshText();
    }
    
    refreshText() {
      this.translatedText = this._translate.instant('hello world');
    }

    onChange(newValue) {
    console.log(newValue);
    this.selectLang(newValue);  // don't forget to update the model here
    }

    public doSomething(date: any):void {
    console.log('Picked date: ', date);
}

}
