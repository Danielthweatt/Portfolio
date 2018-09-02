import React, { Component } from 'react';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import PicturePanel from './components/Panels/PicturePanel';
import InfoPanel from './components/Panels/InfoPanel';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<main>
					<Wrapper>
						<PicturePanel />
						<InfoPanel />
					</Wrapper>
				</main>
			</div>
		);
	}
}

export default App;
