import { Component, OnInit, Input, OnChanges, DoCheck, AfterViewChecked, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Item } from '../item';
import { CARDS } from '../mock-cards';
import { Service } from '../service';
import { Observable } from 'rxjs/Rx';
import {MatTableDataSource} from '@angular/material';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'item-list',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemList implements OnInit {

  cards: Item[];
  displayedColumns = ['description', 'type'];
  dataSource = new MatTableDataSource(this.cards);
  
  constructor(private _service: Service) { }

  ngOnInit() {
    this.getData();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 
  getData() {
   this._service.getData().subscribe(
      data => { 
        this.cards = data as Item[];
        this.dataSource = new MatTableDataSource(this.cards);
      },
      err => console.error(err),
      () => console.log(this.cards)
    );
  }

}
