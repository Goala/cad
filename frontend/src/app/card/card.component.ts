import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mock-cards';
import { Service } from '../service';
import { Observable } from 'rxjs/Rx';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  cards: any;
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
        this.cards = data as Card;
      },
      err => console.error(err),
      () => console.log(this.cards)
    );
  }

}
