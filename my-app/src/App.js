import React, { Component } from 'react';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<main>
					<Wrapper>
						<h1>
							Hi
						</h1>
					</Wrapper>
				</main>
			</div>
		);
	}
}

export default App;
