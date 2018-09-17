import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project';

class Portfolio extends Component {
    state = {
        projects: [{
            title: "Project 1",
            image: "An image",
            description: "A description",
            liveLink: "A live link",
            gitHubLink: "A GitHub link"
        },
        {
            title: "Project 2",
            image: "Another image",
            description: "Another description",
            liveLink: "Another live link",
            gitHubLink: "Another GitHub link"
        }],
        index: 0
    };

    previous = () => {
        if (this.state.index > 0) {
            this.setState((prevState) => ({
                index: prevState.index - 1
            }));
        }
    }

    next = () => {
        if (this.state.index < this.state.projects.length - 1) {
            this.setState((prevState) => ({
                index: prevState.index + 1
            }));
        }
    }
    
    render() {
		return (
			<React.Fragment>
				<h2>Portfolio</h2>
		        <hr />
			    <Project projectInfo={this.state.projects[this.state.index]} />
                <button onClick={this.previous}>
                    Previous
                </button>
                <button onClick={this.next}>
                    Next
                </button>
			</React.Fragment>
		);
	}
}

export default Portfolio;