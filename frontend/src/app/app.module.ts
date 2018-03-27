import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Service} from './service';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    HttpModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule],
  providers: [
    HttpClientModule,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
