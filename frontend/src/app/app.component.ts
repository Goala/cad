import { Component } from '@angular/core';
import { Service } from './service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Team Klaut';
  types = ['AUDIO', 'IMAGE', 'VIDEO'];

  description= '';
  item: Item = {
    description: '',
    type: ''
  }

  constructor(private _service: Service) { };

  test(){
    console.log(this.item);
  }
}