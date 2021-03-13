import React from 'react';
import { Container } from 'react-bootstrap';
const Layout = (props) => {
    return (
			<div>
				<Container fluid>
					{props.children} {/* this will affect all the children below it in app.js */}
				</Container>
			</div>
		);
};

export default Layout;