import React, {useState} from 'react';
import Weather from './Weather'
const Forecast = () => {

	const key = process.env.REACT_APP_API_KEY;

	const [content, setContent] = useState([])

	async function forecastData (){
		
	}


	return (
		<div>
			
		</div>
	);
};

export default Forecast;