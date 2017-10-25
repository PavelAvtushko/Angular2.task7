import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

	constructor(private http: Http) {
	}

	public getData(cityName: string): Observable<any> {
		return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select * 
			from weather.forecast where woeid in (select woeid from geo.places(1)
			where text="${cityName}")&format=json`)
			.map((responce) => responce.json());
	}
}
