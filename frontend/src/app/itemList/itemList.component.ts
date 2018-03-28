import {Component, OnInit} from '@angular/core';
import {Media} from '../media';
import {MediaService} from '../service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'item-list',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemList implements OnInit {

  cards: Media[];
  displayedColumns = ['description', 'type'];
  dataSource = new MatTableDataSource(this.cards);

  constructor(private _service: MediaService) { }

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
        this.cards = data as Media[];
        this.dataSource = new MatTableDataSource(this.cards);
      },
      err => console.error(err),
      () => console.log(this.cards)
    );
  }
}
