import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { LoadService } from '../../services/load.service';
import { Ticket } from '../../models/ticket';
import { Station } from '../../models/station';
import { HttpClient } from '@angular/common/http';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import { interval } from 'rxjs/observable/interval';



@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [HttpService, LoadService]
})
export class FirstComponent implements OnInit {
  console = console;
  myForm: FormControl;
  myForm2: FormControl;
  fromStations: Observable<any[]>;
  toStations: Observable<any[]>;
  data: any;

  stations = [];
  ticket = {
    from: 2200001,
    to: 2200200,
    date: "2018-05-10",
    time: "00:00"
  };
  constructor(
    private httpService: HttpService,
    private http: HttpClient,
    private loadService: LoadService
  ) { }

  ngOnInit() {
    // this.loadService.getJSON().subscribe(data => {
    //   this.stations = data;
    // });
    // this.myForm = new FormControl();
    // this.myForm2 = new FormControl();
    // this.fromStations = this.myForm.valueChanges
    //   .startWith(null)
    //   .map(term => this.findStation(term));
    // this.toStations = this.myForm2.valueChanges
    //   .startWith(null)
    //   .map(term => this.findStation(term));
    //this.submit();
  }
  
  
  findStation(val: string) {
    if (val && val.length >= 3) {
      return this.stations.filter((s) => new RegExp(val, 'gi').test(s.name));
    } else {
      return [];
    }

  }

  submit() {
    Observable
    .interval(15*1000)
    .timeInterval()
    .flatMap(() => this.httpService.postData(this.ticket))
    .subscribe(
      (val) => {this.data=val;
        this.data=this.data.data.list;
        console.log("POST call successful value returned in body",
          this.data);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }
  
  test(){
    if (this.data){
      console.log(this.data);
    }
    else
    {
      alert("ПУСТО");
    }
    alert(this.data);
  }



  
}

