
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TodoEntry, TodoEntryItem } from '../models/index';
import { Logger } from '../services/logger.service';
import { GROOTS } from '../shared/constants';


@Injectable()
export class TodoEntryService {

    private apiUrl = GROOTS.TODOENTRYAPI;
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private logger: Logger) { }


    getTodoEntry(id: number): Observable<TodoEntry> {

        return this.http.get(`${this.apiUrl}/${id}`, this.options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }

    getTodoEntries(id: number): Observable<TodoEntry[]> {

        return this.http.get(`${this.apiUrl}`, this.options)
                        .map(res => res.json().data.filter(tde => tde.group.id === id))
                        .catch(this.handleError);
    }



    private handleError(error: any) {

        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : GROOTS.serverError;

        console.error(errMsg);

        return Observable.throw(error);
    }
}

