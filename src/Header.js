import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './index.css'
const Header = () => {
    return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='/'>Weather Time</Navbar.Brand>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/details'>Details</Nav.Link>
					</Nav>
				</Navbar>
			</div>
		);
};

export default Header;