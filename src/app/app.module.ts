import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';

import { DataService } from './data.service';
import { GoldComponent } from './gold/gold.component'
@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
