import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mock-cards';
import { Service } from '../service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: any;
  
  constructor(private _service: Service) { }

  ngOnInit() {
    this.getData();
  }
 
  getData() {
   this._service.getData().subscribe(
      data => { this.cards = data},
      err => console.error(err),
      () => console.log('Done')
    );
  }

}
