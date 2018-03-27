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

  cards = CARDS;
  foods: any;
  
  constructor(private _service: Service) { }

  ngOnInit() {
    this.getFoods();
  }
 
  getFoods() {
   this._service.getFoods().subscribe(
      data => { this.foods = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

}
