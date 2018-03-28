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

    // Uses http.get() to load data from a single API endpoint
    getData() {
        return this.http.get('/media');
    }

    postData(data: MediaDto): Observable<MediaDto> {
        console.log("sumbit", data);
        return this.http.post<MediaDto>('/media', JSON.stringify(data), httpOptions);
    }
}
