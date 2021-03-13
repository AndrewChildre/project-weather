import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Layout from './Layout'
import Weather from './Weather';
import Header from './Header';
import About from './About';
import Details from './Details';
import { Container } from 'react-bootstrap';

function App() {
	return (
    
		<div>
      <Header />
      <Container fluid>
			

			<Router>
				<Switch>
					<Route exact path='/' component={Weather} />
					<Route path='/about' component={About} />
					<Route path='/details' component={Details} />
				</Switch>
			</Router>
      </Container>
		</div>
	);
}

export default App;
