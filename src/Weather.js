import React from 'react';
import { Button } from 'react-bootstrap'
const Weather = () => {
    return (
			<div>
				<h1>Weather Time</h1>
				<form>
					<input type='text' name='city' placeholder='city' />
					<input type='text' name='counrty' placeholder='country' />
				</form>
				<Button>Test</Button>
			</div>
		);
};

export default Weather;