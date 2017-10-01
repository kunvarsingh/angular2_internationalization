import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {GlobalService} from './GlobalService';
import { HttpModule } from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate/index';
import { LoggingService, Config } from 'loggerservice';

@NgModule({
  declarations: [
    AppComponent,TranslatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,FormsModule,
    routing ,HttpModule,CommonModule,ReactiveFormsModule,
     TranslateModule.forRoot()
  ],

  providers: [GlobalService,TRANSLATION_PROVIDERS, TranslateService,Config,LoggingService ],
  bootstrap: [AppComponent],

})

export class AppModule { }
