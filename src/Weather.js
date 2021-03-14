import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import DisplayWeather from './DisplayWeather';
import './index.css'

const Weather = () => {
	const key = process.env.REACT_APP_API_KEY;
	const [form, setForm] = useState({
		city: '',
		// country: '',
	});
	const [weather, setWeather] = useState([]);

	async function weatherData(e) {
		e.preventDefault();
		if (form.city == '') {
			alert('HEY MORON!');
		} else {
			const data = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&appid=${key}`
			)
				.then((res) => res.json())
				.then((data) => data);

			setWeather({ data: data });
		}
	}
	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name == 'city') {
			setForm({ ...setForm, city: value });
		}

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
			</form>

			

			{weather.data != undefined ? (
				<div>
					<DisplayWeather data={weather.data} />
				</div>
			) : null}
               <Container className='get-weather' fluid > 
            <Button 
            
				variant='secondary'
				size='lg' block
				onClick={(e) => weatherData(e)}>
				Submit
			</Button>
            </Container>
            
		</div>
	);
};

export default Weather;
