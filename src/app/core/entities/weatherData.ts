export interface WeatherData {
	atmosphere: {
		humidity: string;
		pressure: string
	};
	item: {
		condition: {
			date: string;
			temp: string;
		};
		description: string
	};
	wind: {
		speed: string
	};
	location: {
		city: string;
		country: string;
	};
}