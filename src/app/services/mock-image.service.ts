
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { GROOTS } from '../shared/constants';


@Injectable()
export class ImageService {

    constructor(private http: Http) { }


    getImages(): Observable<any> {

        return this.http.get(`https://jsonplaceholder.typicode.com/photos`)
                        .map(res => {
                            console.log('res: ' + JSON.stringify(res));
                            return []; // res.json();
                        })
                        .catch(this.handleError);
                        //TODO: DOES NOT WORK
    }

    private handleError(error: any) {

        console.log('error: ' + error);
        return Observable.throw(error);
/*
        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : GROOTS.serverError;

        console.error(errMsg);

        return Observable.throw(error);
*/
    }
}

