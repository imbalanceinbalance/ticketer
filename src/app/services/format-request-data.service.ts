import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrainData } from '../models/traindata';

@Injectable()
export class FormatRequestDataService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<TrainData[]> {
        return this.http.get('assets/users.json').pipe(map((data: any) => {
            return data.map(function (train: any) {
                if (train.types != 0) {
                    for (let i = 0; i < train.types.length; i++) {
                        if (train.types[i].title == "Плацкарт") {
                            return { tnumber: train.num, travelTime: train.travelTime, types: train.types[i] };
                        }
                    }

                }
            });
        }));
    }
}