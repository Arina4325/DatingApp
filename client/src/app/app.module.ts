import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
