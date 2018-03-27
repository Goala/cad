import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

    postData(data: any) {
        return this.http.post('/api/media', data);
    }
}
