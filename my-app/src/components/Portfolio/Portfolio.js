import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project';

class Portfolio extends Component {
    state = {
        project: {
            
        }
    };
    
    render() {
		return (
			<React.Fragment>
				<h2>Portfolio</h2>
		        <hr />
			    <Project />
			</React.Fragment>
		);
	}
}

export default Portfolio;