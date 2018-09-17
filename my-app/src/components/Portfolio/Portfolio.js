import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project';

class Portfolio extends Component {
    state = {
        projects: [{
            title: "Trivia Game",
            image: "An image",
            description: "A description",
            liveLink: "https://danielthweatt.github.io/TriviaGame/",
            gitHubLink: "https://github.com/Danielthweatt/TriviaGame/"
        },
        {
            title: "LIRI",
            image: "Another image",
            description: "Another description",
            liveLink: null,
            gitHubLink: "https://github.com/Danielthweatt/liri-node-app/"
        },
        {
            title: "NYT React Search",
            image: "An image",
            description: "A description",
            liveLink: "https://desolate-shelf-80668.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/NYTReactSearch/"
        },
        {
            title: "Boring Political App",
            image: "Another image",
            description: "Another description",
            liveLink: "https://boringpoliticalapp.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/Boring-Political-App/"
        },
        {
            title: "Octopied",
            image: "An image",
            description: "A description",
            liveLink: "https://octopied.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/Octopied/"
        },
        {
            title: "Donation App",
            image: "Another image",
            description: "Another description",
            liveLink: "https://donationnation.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/DonationApp/"
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
                {this.state.index === 0 ? ( 
                    null
                ) : (
                    <button onClick={this.previous}>
                        Previous
                    </button>
                )}
                {this.state.index === this.state.projects.length - 1 ? ( 
                    null
                ) : (
                    <button id="next-button" onClick={this.next}>
                        Next
                    </button>
                )}
			</React.Fragment>
		);
	}
}

export default Portfolio;