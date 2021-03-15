import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './index.css';
const About = () => {
	useEffect(() => {}, []);
	return (
		<div>
			<Jumbotron className='jumbo-content'>
				<h1 className='about-title'>Weather Time</h1>
				<p>Get weather from any city in the world with one search</p>
				<br />
				<h3>Page Architect</h3>
				<p>Andrew Childre</p>
				<h3>Contact</h3>
				<p>andrewchildre@gmail.com | Github: github.com/AndrewChildre</p>
				<h3>Credits</h3>
				<p>GA Staff | YouTube | Stack Overflow | React Docs | Google</p>
			</Jumbotron>
		</div>
	);
};

export default About;
