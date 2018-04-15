import { Component, OnInit, Injectable, AfterViewChecked, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Media } from '../media';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'item-list',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemList implements OnInit, OnChanges {
  displayedColumns = ['description', 'media'];
  dataSource;

  @Input()
  items: Array<Media>;

  constructor() { }

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
