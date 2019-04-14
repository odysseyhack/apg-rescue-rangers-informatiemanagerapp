import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { WeatherService } from 'src/app/mediastream/weather.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() childTexts;
  @Input() childImages;
  startingDate: string = "2015-01-01";
  endDate: string = "2015-02-01";

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  sendKeyword(text: string[]) {
    this.valueChange.emit(text);
  }

}
