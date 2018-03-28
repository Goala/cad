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

    getBase64ById(id) {
        return this.http.get(`/media/${id}/base64`);
    }

    postData(data: MediaDto): Observable<MediaDto> {
        return this.http.post<MediaDto>('/media', JSON.stringify(data), httpOptions);
    }
}
