import { Component, OnInit } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StationRequestService } from '../../services/station-request.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [StationRequestService]
})
export class TestComponent implements OnInit {

  constructor(
    private stationRequestService: StationRequestService
  ) {
  }

  list = null;


  ngOnInit() {
  }

  try(value)
  {
    this.stationRequestService.getStations(value).subscribe(data => {
      console.log(data);
    });
    //console.log(this.stationRequestService.getStations(value));
  }

}
