import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../About';
import Portfolio from '../../Portfolio';
import Contact from '../../Contact';
import './InfoPanel.css';

const InfoPanel = () => (
	<section className="info-panel">
		<Switch>
			<Route exact path="/" render={() => <About />} />
			<Route exact path="/about" render={() => <About />} />
			<Route exact path="/portfolio" render={() => <Portfolio />} />
			<Route exact path="/contact" render={() => <Contact />} />
		</Switch>
	</section>
);

export default InfoPanel;