import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const DisplayWeather = (props) => {
	const { data } = props;

	const icons =
		'http://openweathermap.org/img/wn/' + `${data.weather[0].icon}.png`;

	return (
		<Container fluid>
			<div className='display-weather'>
				<div className='maincard'>
					<h1 className='card-title'>
						{data.name}
						<span className='weather-temp'>
							{' '}
							{Math.floor(data.main.temp)}
							<sup>o</sup>{' '}
						</span>
					</h1>

					<span className='weather-main'>
						{data.weather[0].main}
						<img src={icons} alt='#' className='weather-icons' />
						<h4 className='card-sub-title'>
							As of {new Date().toLocaleTimeString()}
						</h4>
					</span>
					<div>
						<Carousel nextLabel='' className='carousel'>
							<Carousel.Item>
								<h3>High / Low</h3>
								{Math.floor(data.main.temp_max)} /{' '}
								<span>{Math.floor(data.main.temp_min)}</span>
							</Carousel.Item>
							<Carousel.Item>
								<h3>Humidity</h3>
								{data.main.humidity}%
							</Carousel.Item>
							<Carousel.Item>
								<h3>Wind Speed</h3>
								{data.wind.speed} mph
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default DisplayWeather;
