import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {

    SERVER_URL = 'https://lit-harbor-28997.herokuapp.com/';

    constructor(private http: Http) {
    }

    getInfo(): Observable<any> {
        return this.http.get(this.SERVER_URL.concat('db'));
    }

}
