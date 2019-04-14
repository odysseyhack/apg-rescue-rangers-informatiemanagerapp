import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


let params = new HttpParams();
params.append("someKey", "oenuthoeune");

@Component({
  selector: 'app-mediastream',
  templateUrl: './mediastream.component.html',
  styleUrls: ['./mediastream.component.scss']
})
export class MediastreamComponent implements OnInit {
  datareceivedback;
  texts;
  images;
  questions;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  putTagData(tag: string) {
    let data =  {tag:tag};
    this.http.get<any>('http://127.0.0.1:5003/sendtags',{params: data}).subscribe(data => {
      this.images = data[0];
      this.texts = data[1];
      console.log(this.images);
      console.log(this.texts);
    });
  }

  sendQuestion(question: string) {
    let data = {'QList':question};
    this.http.get('http://127.0.0.1:5003/updateQuestion',{params: data}).subscribe(data => {
      console.log(data);
    });
  }
}