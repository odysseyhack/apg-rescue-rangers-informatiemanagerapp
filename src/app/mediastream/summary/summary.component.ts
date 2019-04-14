import { Component, OnInit } from '@angular/core';
import { Incident } from '../../model/eventdata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherService } from 'src/app/mediastream/weather.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  title = "Zware storm januari 2018, hoek van Holland";

  data = [{value: "GRIP-1", link: '../../../assets/img/fire.png'},
  {value: "20:55", link: '../../../assets/img/time.png'},
  {value: "Landhaven 30", link: '../../../assets/img/location.png'},
  {value: "27km/h", link: '../../../assets/img/windspeed.png'},
  {value: "N/NE", link: '../../../assets/img/direction.png'},
  {value: "69%", link: '../../../assets/img/moisture.png'}];

  constructor(private weatherService: WeatherService) { }
  weather;
  texts;
  images;

  ngOnInit() {
    console.log("otehuoeu");
  }

}