import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './InfoPanel.css';
import About from '../../About';
import Portfolio from '../../Portfolio';
import Contact from '../../Contact';

const InfoPanel = props => (
	<div className="info-panel">
		<Switch>
			<Route exact path="/" render={() => <About />} />
			<Route exact path="/about" render={() => <About />} />
			<Route exact path="/portfolio" render={() => <Portfolio />} />
			<Route exact path="/contact" render={() => <Contact />} />
		</Switch>
	</div>
);

export default InfoPanel;