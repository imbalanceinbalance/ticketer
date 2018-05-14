import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrainData } from '../models/traindata';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }


    postData(ticket: Ticket): Observable<TrainData[]> {
        let body = new HttpParams();
        Object.keys(ticket).forEach(function (key) {
            body = body.append(key, ticket[key]);
        });
        let myhttp = 'https://cors-anywhere.herokuapp.com/' + 'https://booking.uz.gov.ua/ru/train_search/';
        const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http.post(myhttp, body, { headers: myheader }).pipe(map((data: any) => {
            data = data.data.list;
            return data.map(function (train: any) {
                if (train.types != 0 && ((train.num == "144Л") || (train.num == "358Л") || (train.num == "106Ш") || (train.num == "081Л"))) {
                    for (let i = 0; i < train.types.length; i++) {
                        if (train.types[i].title == "Плацкарт") {
                            console.log("MUSIC");
                            var audio = new Audio('assets/music.mp3');
                            audio.play();
                            return { tnumber: train.num, travelTime: train.travelTime, types: train.types[i] };
                        }
                    }
                }
            });
        }));
    }
}
