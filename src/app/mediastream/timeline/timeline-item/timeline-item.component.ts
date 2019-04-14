import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  fmdate = new Date("2016-10-08T08:44");
  
  incomingMessages = [{title: "Schade aan Rijksgebouw", message: "Bericht geverifieerd door 11 gebruikers.",timestamp: "23 minuten geleden"},
    {title: "Storm heeft meerdere gebouwen getroffen",message: "Ook treinen lagen stil. Daarnaast grote file op A2.",timestamp: "12 uur geleden"},
    {title: "Stormgebied hangt boven Noord-Holland", message: "Storm breidt zich snel uit richting rest van het land. Ben voorbereid op harde windstoten.", timestamp: "1 dag geleden"},  
    {title: "Groot lagedrukgebied gevormd rond Noordzee", message: "Sinds dinsdag vormt zich een groot lagedrukgebied rondom de Noordzee dat langzaam onze kant op drijft. Verwacht wordt heftig weer.",timestamp: "2 dagen geleden"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
