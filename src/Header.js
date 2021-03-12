import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './index.css'
const Header = () => {
    return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='#home'>Weather Time</Navbar.Brand>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Navbar>
			</div>
		);
};

export default Header;