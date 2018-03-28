import {Component, OnInit, Injectable, AfterViewChecked, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Media} from '../media';
import {MediaService} from '../service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'item-list',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemList implements OnInit, OnChanges {
  displayedColumns = ['description', 'type'];
  dataSource;

  @Input() 
  items: Media[];
  

  constructor(private _service: MediaService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.dataSource = new MatTableDataSource(this.items);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
