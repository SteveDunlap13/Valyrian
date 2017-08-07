

import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TodoGroup } from '../models/index';
import { Logger } from '../services/logger.service';
import { GROOTS } from '../shared/constants';


@Injectable()
export class TodoGroupService {

    private path = GROOTS.TODOGROUP;
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    // constructor(private apiService: ApiService
    constructor(private http: Http, private logger: Logger) { }



    getTodoGroups(): Observable<TodoGroup[]> {

        return this.http.get(this.path, this.options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }





    private extractData(res: Response) {

        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {

        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : GROOTS.serverError;

        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}
