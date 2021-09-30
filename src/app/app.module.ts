import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilmesComponent } from './filmes/filmes.component';

registerLocaleData(localePt,'pt');
@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'pt'},
    {provide:DEFAULT_CURRENCY_CODE,useValue:'BRL',},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
