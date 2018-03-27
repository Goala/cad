import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Service} from './service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { ItemList } from './itemList/itemList.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    HttpModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule
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
