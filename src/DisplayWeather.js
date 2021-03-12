import React from 'react';

const DisplayWeather = (props) => {

const {data} = props;

    return (
        <div className='displayweather'>
           <div className='maincard'>
               <span className='cardtitle'>
                   {data.name}, {data.sys.country}. Weather
               </span>
               <span className='cardsubtitle'>
                   As Of {new Date().toLocaleTimeString()}
               </span>
               <h1>{data.main.temp}</h1>
               </div> 
        </div>
    );
};

export default DisplayWeather;