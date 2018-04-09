import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MediaService} from './service';
import {Media, MediaDto} from './media';
import Utils from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  title = 'ThatOne';
  items: Array<Media> = [];
  types = ['AUDIO', 'IMAGE', 'VIDEO'];
  base64: string = '';
  uploadEnabled = true;

  media: Media = {
    id: -1,
    fileEnding: '',
    description: '',
    type: '',
    fileBase64: ''
  };

  constructor(private service: MediaService) {
  };

  ngOnInit() {
    this.items = this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }


  uploadFile(event) {
    let files = event.target.files;
    if (files.length > 0) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
      this.media.fileEnding = files[0]["name"].split(".", 2)[1];
      this.checkFileType(this.media.fileEnding);
      this.checkForValues();
    }
  };

  submit() {
    let mediaDto: MediaDto = {
      base64: this.base64,
      ...this.media
    };
    this.service.postData(mediaDto).subscribe(res => {
      this.items.push(res);
      this.loadData();
      this.media.description = '';
      this.media.type = '';
      this.media.fileBase64 = '';
      this.media.fileEnding = '';
      this.uploadEnabled = false;
      this.base64 = '';
    });
  };

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
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

  checkFileType(type: string) {
    this.media.type = Utils.checkFormat(type);
  }

  checkForValues(): void {
    // console.log((this.media.type != '') && (this.media.description != '') && (this.media.fileBase64 != '') && (this.media.fileEnding != ''), this.media.description != '', this.media.type != '', this.media.fileBase64 != '', this.media.fileEnding != '', this.media);
    this.uploadEnabled = (this.media.type != '') && (this.media.description != '') && (this.media.fileBase64 != '') && (this.media.fileEnding != '');
  };
}
