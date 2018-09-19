import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import PicturePanel from './components/Panels/PicturePanel';
import InfoPanel from './components/Panels/InfoPanel';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Header />
					<main>
						<Wrapper>
							<PicturePanel />
							<InfoPanel />
						</Wrapper>
					</main>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
