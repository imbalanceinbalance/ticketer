import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class StationRequestService {

  constructor(private http: HttpClient) {
    }

  public getStations(value: string){
    return this.http.get(`https://booking.uz.gov.ua/ru/train_search/station/?term=${value}`);
  }
}

