import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MediaDto} from './media';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MediaService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getData() {
        return this.http.get('/api/media');
    }

    postData(data: MediaDto) {
        return this.http.post('/api/media', JSON.stringify(data));
    }
}
