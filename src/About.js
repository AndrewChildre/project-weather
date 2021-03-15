import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
const About = () => {
	useEffect(() => {}, []);
	return (
		<div>
			
			<Container fluid className='jumbo-content'>
				<h1 className='about-title'>Weather Time</h1>
				<p>Get weather from any city in the world with one search</p>
				<br />
				<h3>Page Architect</h3>
				<p>Andrew Childre</p>
				<h3>Contact</h3>
				<p>andrewchildre@gmail.com | Github: github.com/AndrewChildre</p>
				<h3>Credits</h3>
				<p>GA Staff | YouTube | Stack Overflow | React Docs | Google</p>
			</Container>
			
		</div>
	);
};

export default About;
