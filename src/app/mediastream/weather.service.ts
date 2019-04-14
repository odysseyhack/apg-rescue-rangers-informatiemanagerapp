import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'text/plain'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=kwB4lI0GNIcE0uyuAA9blC3KwL0a8JH1&q=53.2193835%2C6.5665018');
  }
  getTopicModels() {
    return this.http.get('http://127.0.0.1:5003/topicmodels');
  }
  getImages() {
    return this.http.get('http://127.0.0.1:5003/images');
  }

}
