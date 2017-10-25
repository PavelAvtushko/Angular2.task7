import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services';
import { Observable, Subscription } from 'rxjs';
import { WeatherData } from '../../entities/weatherData';
import $ from 'jquery';

@Component({
	selector: 'weather',
	templateUrl: 'weather.component.html',
	styles: [require('./weather.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit, OnDestroy {
	public data: WeatherData;
	public imageSrc: string;
	public searchError: boolean;
	private subscription: Subscription;

	constructor(
		private weatherService: WeatherService) {
	}

	public sendRequest(e, cityName) {
		e.preventDefault();
		if (!this.searchError) {
			this.subscription = this.weatherService
				.getData(cityName)
				.subscribe((data) => this.verifyRecievedData(data), () => this.showWarningMessage());
		}
	}

	public ngOnInit() {
		this.reset();
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	public reset() {
		this.searchError = false;
		this.data = null;
	}

	private verifyRecievedData(data) {
		if (data.query.results) {
			this.data = data.query.results.channel;
			this.imageSrc = this.data.item.description.match(/http.+?\.gif/i)[0];
		} else {
			this.showWarningMessage();
		}
	}

	private showWarningMessage() {
		this.searchError = true;
		this.data = null;
	}
}
