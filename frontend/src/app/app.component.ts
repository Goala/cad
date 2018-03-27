import { Component } from '@angular/core';
import {MediaService} from './service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ThatOne';
  types = ['AUDIO', 'IMAGE', 'VIDEO'];

  item: Item = {
    id: -1,
    description: '',
    type: ''
  }

  constructor(private service: MediaService) { };

  test(){
    console.log(this.item);
  }
}
