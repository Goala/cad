import { Component } from '@angular/core';
import { Service } from './service';
import { Card } from './card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Team Klaut';
  types = ['AUDIO', 'IMAGE', 'VIDEO'];

  description= '';
  card: Card = {
    description: '',
    type: ''
  }

  constructor(private _service: Service) { };

  test(){
    console.log(this.card);
  }
}