import React from 'react';
import {Container, Carousel} from 'react-bootstrap'
const DisplayWeather = (props) => {

const {data} = props;
console.log(data)

    const icons =
			'http://openweathermap.org/img/wn/' +
			`${data.weather[0].icon}` +
			'.png';

    return (
			<Container fluid>
				<div className='display-weather'>
					<div className='maincard'>
						<h1 className='card-title'>{data.name}</h1>
						<h4 className='card-sub-title'>
							As Of {new Date().toLocaleTimeString()}
						</h4>
						<h1 className='weather-temp'>{Math.floor(data.main.temp)} deg</h1>
						<span className='weather-main'>
							{data.weather[0].main}
							<img src={icons} alt='#' className='weather-icons' />
							<div>
								<Carousel nextLabel=''className='carousel'>
									<Carousel.Item>
									
										<h3>High</h3>
										{data.main.temp_max}
											
										
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='holder.js/800x400?text=Second slide&bg=282c34'
											alt='Second slide'
										/>

										<Carousel.Caption>
											<h3></h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='holder.js/800x400?text=Third slide&bg=20232a'
											alt='Third slide'
										/>

										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>
												Praesent commodo cursus magna, vel scelerisque nisl
												consectetur.
											</p>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</div>
						</span>
					</div>
				</div>
			</Container>
		);
};

export default DisplayWeather;