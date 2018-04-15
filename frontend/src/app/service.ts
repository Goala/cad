import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MediaDto} from './media';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

@Injectable()
export class MediaService {

    constructor(private http:HttpClient) {}

    getData() {
        return this.http.get('/media');
    }

    postData(data: MediaDto): Observable<MediaDto> {
        return this.http.post<MediaDto>('/media', JSON.stringify(data), httpOptions);
    }
}
