import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  fmdate = new Date("2016-10-08T08:44");
  
  incomingMessages = [{title: "Vuur bij Landenstraat verspreidt richting school", message: "Bericht geverifieerd door 22 gebruikers.",timestamp: "23sec geleden"},
    {title: "Omwonenden geevacueerd",message: "De omwonenden zijn inmiddels geevacueerd. Verwacht wordt dat ze de aankomende paar dagen niet huiswaarts kunnen gaan.",timestamp: "20min geleden"},
    {title: "Brandweer gearriveerd", message: "De brandweer is momenteel ter plaatse. Het vuur is inmiddels verspreid richting buurwoning.", timestamp: "1u geleden"},  
    {title: "Vuur gedetecteerd Landenstraat", message: "Om 21:15u is een brand ontdekt in de Landenstraat. Brandweer is gealarmeerd.",timestamp: "1u23min geleden"}
  ];

  constructor() { }

  ngOnInit() {
  }

  sendKeyword(text: string) {
    
  }

}
