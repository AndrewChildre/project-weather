import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import DisplayWeather from './DisplayWeather';
const Weather = () => {

            const key = process.env.REACT_APP_API_KEY;
    const [form, setForm] = useState({
        city: '',
        country: ''
    })
    const [weather,setWeather] = useState([])

    async function weatherData(e){
       (e).preventDefault();
       if(form.city === ''){
           alert('HEY MORON!')
       } else {
        const data = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&units=imperial&appid=${key}`
				).then((res) => (res.json()))
                .then(data => (data) )
               
                setWeather(
                    {data : data}
                )
        }
    }
       const handleChange = (e) => {
           let name = e.target.name
           let value = e.target.value

           if(name === 'city'){
               setForm({...setForm, city:value})
           }

               if (name === 'country') {
			    	setForm({ ...setForm, country:value });
								}

       }    
    return (
			<div>
                {
                    weather.data != undefined ?
                        <div>
                            <DisplayWeather data={weather.data} />
                        </div>
                    :null
                }

                <form>
					<input
						type='text'
						name='city'
						placeholder='city'
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						name='counrty'
						placeholder='country'
						onChange={(e) => handleChange(e)}
                
					/>
				</form>

                	<Button variant='primary' size ='lg'className='getWeather' onClick={(e) => weatherData(e)}>Sumbit</Button>
			</div>
		);
};

export default Weather;