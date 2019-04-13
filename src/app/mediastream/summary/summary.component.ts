import { Component, OnInit } from '@angular/core';
import { Incident } from '../../model/eventdata';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  title = "Casinobrand Groningen";

  data = [{value: "GRIP-1", link: '../../../assets/img/fire.png'},
  {value: "20:55", link: '../../../assets/img/time.png'},
  {value: "Landhaven 30", link: '../../../assets/img/location.png'},
  {value: "27km/h", link: '../../../assets/img/windspeed.png'},
  {value: "N/NE", link: '../../../assets/img/direction.png'},
  {value: "69%", link: '../../../assets/img/moisture.png'}];

  constructor() { }

  ngOnInit() {

  }

}





// code if we used the class !!! 
    // this.incident.severity = 3;
    // this.incident.time = "20:22";
    // this.incident.location = "Landhaven 30";
    // this.incident.windspeed = 27;
    // this.incident.winddirection = "N/NE";
    // this.incident.humidity = 69;