import React, { useState, useEffect} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import DisplayWeather from './DisplayWeather';
import './index.css';

const Weather = () => {
	const key = process.env.REACT_APP_API_KEY;
	
    const [city, setCity] = useState('')

	const [weather, setWeather] = useState([]);
     
	function weatherData(e) {
		e.preventDefault();
		if (city == '') {
        
            alert('Enter')
            
		} else {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
			)
				.then((res) => res.json())
				.then((data) => setWeather({ data: data }))

			
		}
	}
	const handleChange = (e) => {
        e.preventDefault();
		setCity(e.target.value)

		// if (name == 'country') {
		// 	setForm({ ...setForm, country: value });
		// }
	};
  
	return (
		<div>
			<form>
				<Form.Control
					size='lg'
					type='text'
					placeholder='City 🏬'
					name='city'
					onChange={(e) => handleChange(e)}
				/>

				{/* <Form.Control
                    className='country-box'
					size='lg'
					type='text'
					placeholder='Country 🇺🇸'
					name='country'
					onChange={(e) => handleChange(e)}
				/> */}
			

			{weather.data != undefined ? (
				<div>
					<DisplayWeather data={weather.data} />
				</div>
			) : null}
			<Container className='get-weather' fluid>
				<Button
					variant='secondary'
					size='lg'
					block
					onClick={(e) => weatherData(e)}>
					Submit
				</Button>
			</Container>
            </form>
		</div>
	);
};

export default Weather;
