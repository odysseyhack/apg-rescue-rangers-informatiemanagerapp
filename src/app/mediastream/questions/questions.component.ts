import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Output() questionAdded = new EventEmitter();
  question;
  isAsked = false;

  vragen = ["Heb je vliegende dakpannen rond 5u 's middags?","Voel je je bedeigd gedurende deze situatie?"];
  antwoorden = [5, 3];

  constructor() { }

  ngOnInit() {
  }

  update(value: string) {
    this.question = value;
    this.isAsked = true;
    this.questionAdded.emit(value);
  }  

}
