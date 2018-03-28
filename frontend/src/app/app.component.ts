import { Component, OnInit } from '@angular/core';
import { MediaService } from './service';
import { Media, MediaDto } from './media';
import { ItemList} from './itemList/itemList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ThatOne';
  items: Array<Media> = [];
  types = ['AUDIO', 'IMAGE', 'VIDEO'];
  base64: string = '';
  
  media: Media = {
    id: -1,
    fileEnding: '',
    description: '',
    type: '',
    fileBase64:''
  }

  constructor(private service: MediaService) { };

  ngOnInit() {
    this.items = this.loadData();
  }

  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      // console.log(files[0]); // You will see the file
      let reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);

    }
  };

  submit() {
    let mediaDto: MediaDto = {
      base64: this.base64,
      ...this.media
    }
    this.service.postData(mediaDto).subscribe(res => {
      this.items.push(res);
      // console.log(res, "res", this.items);
      this.loadData();
    });
  };

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64 = btoa(binaryString);
   }

   loadData(): Array<Media> {
     this.service.getData().subscribe(
      data => {
        this.items = data as Array<Media>;
        return data;
      },
      err => console.error(err),
      () => {
        //console.log(this.items)
    });
    return [];
  }
}
