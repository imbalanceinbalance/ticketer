import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../models/ticket';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }


    postData(ticket: Ticket) {
        let body = new HttpParams();
        Object.keys(ticket).forEach(function (key) {
            body = body.append(key, ticket[key]);
        });
        let myhttp='https://cors-anywhere.herokuapp.com/'+'https://booking.uz.gov.ua/ru/train_search/';
        const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http.post(myhttp, body, { headers: myheader });
    }
}

