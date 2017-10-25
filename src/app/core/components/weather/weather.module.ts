import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';

// Services
import { WeatherService } from '../../services';

@NgModule({
	imports: [CommonModule],
	declarations: [
		WeatherComponent
	],
	providers: [
		WeatherService
	],
	exports: [WeatherComponent]
})
export class WeatherModule {
	constructor() {
	}
}
