import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'
const DisplayWeather = (props) => {

const {data} = props;
console.log(data)

    const icons = 'http://openweathermap.org/img/wn/' + `${data.weather[0].icon}` + '.png'

    return (
			<div className='display-weather'>
				
					<Container fluid className='display-container'>
						<div className='maincard'>
							<span className='card-title'>
								{data.name}, {data.sys.country}. Weather
							</span>
							<span className='card-sub-title'>
								As Of {new Date().toLocaleTimeString()}
							</span>
							<h1>{Math.floor(data.main.temp)} deg</h1>
							<span className='weather-main'>{data.weather[0].main}</span>
							<img src={icons} alt='#' className='weather-icons' />
						</div>
					</Container>
				
			</div>
		);
};

export default DisplayWeather;