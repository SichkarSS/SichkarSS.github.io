import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {

    SERVER_URL = 'https://lit-harbor-28997.herokuapp.com/';
    SERVER_URL_HOME = 'http://localhost:5000/';

    constructor(private http: Http) {
    }

    getInfo(): Observable<any> {
        return this.http.get(this.SERVER_URL.concat('db'));
    }

    getAllEvents(): Observable<any> {
        return this.http.get(this.SERVER_URL.concat('events'));
    }

}
