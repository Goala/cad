import {Component, OnInit, Injectable, AfterViewChecked, Input, OnChanges, SimpleChanges, Inject} from '@angular/core';
import {Media} from '../media';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  items: Array<Media>;
  

  constructor(private service: MediaService) { }

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

  openMedia() {
    this.service.getBase64ById(this.items[3].id).subscribe(
      data => {
        let base64 = '';
        base64 = data as string;
        console.log(base64, this.items[3]);
        let win = window.open('', 'popup-beispiel', 'height=400,width=400,resizable=no');
        let img = `<img width='16' height='16' alt='tick' src='data:image/jpg;base64${base64}'>`
        win.document.write(`
          <h1>Grafiken mit Data-URI</h1>
          ${img}
          ${base64}
        `);
      },
      err => console.error(err),
      () => {
        //console.log(this.items)
    });
    

    
  }
}
