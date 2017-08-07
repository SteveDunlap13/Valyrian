

import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TodoEntry, TodoEntryItem } from '../models/index';
import { Logger } from '../services/logger.service';
import { GROOTS } from '../shared/constants';


@Injectable()
export class TodoEntryService {

    private path = GROOTS.TODOENTRYAPI;
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    // constructor(private apiService: ApiService
    constructor(private http: Http, private logger: Logger) { }


    createTodoEntry(tce: TodoEntry) {

        let body = JSON.stringify(tce);

        return this.http.post(this.path, body, this.options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getTodoEntries(): Observable<TodoEntry[]> {

        return this.http.get(this.path, this.options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }

    updateTodoEntry(tce: TodoEntry): Observable<any> {

        let url = `${this.path}/${tce.id}`;
        let body = JSON.stringify(tce);

        return this.http.put(url, body, this.options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    deleteTodoEntry(id: number): Observable<any> {

        let url = `${this.path}/${id}`;

        return this.http.delete(url, this.options)
                        .map(this.extractData)
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

