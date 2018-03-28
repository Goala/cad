import { Component } from '@angular/core';
import { MediaService } from './service';
import { Media, MediaDto } from './media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ThatOne';
  types = ['AUDIO', 'IMAGE', 'VIDEO'];

  mediaDto: MediaDto = {
    id: -1,
    description: '',
    type: '',
    base64: '' 
  }

  constructor(private service: MediaService) { };

  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      // console.log(files[0]); // You will see the file
      let reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);

    }
  }

  submit() {
    console.log("sumbit");
    this.service.postData(this.mediaDto);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.mediaDto.base64= btoa(binaryString);
   }

  test(){
    console.log(JSON.stringify(this.mediaDto));
  }
}
