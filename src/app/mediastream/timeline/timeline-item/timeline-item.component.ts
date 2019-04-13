import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  title = "Vuur bij Landenstraat verspreidt richting school";
  subtext = "Bericht geverifieerd door 22 gebruikers";

  constructor() { }

  ngOnInit() {
  }

}
