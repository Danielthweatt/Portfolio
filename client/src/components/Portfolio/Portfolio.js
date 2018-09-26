import React, { Component } from 'react';
import './Portfolio.css';
import question from "../../assets/images/question.jpg";
import node from "../../assets/images/node.jpg";
import news from "../../assets/images/news.jpg";
import bill from "../../assets/images/bill.jpg";
import space from "../../assets/images/space.jpg";
import donation from "../../assets/images/donation.jpg";
import Project from '../Project';

class Portfolio extends Component {
    state = {
        projects: [{
            title: "Trivia Game",
            image: question,
            description: "A Godzilla trivia website. Built with HTML5, CSS3, JavaScript, Bootstrap, and jQuery.",
            liveLink: "https://danielthweatt.github.io/TriviaGame/",
            gitHubLink: "https://github.com/Danielthweatt/TriviaGame/"
        },
        {
            title: "LIRI",
            image: node, 
            description: "A Node.js command-line application. Built with JavaScript, Node.js, and the Spotify, " + 
            "Twitter, and OMDB API's. LIRI can search Twitter for your most recent tweets, " + 
            "search OMDB for information on movies, and search Spotify for information on music.",
            liveLink: '',
            gitHubLink: "https://github.com/Danielthweatt/liri-node-app/"
        },
        {
            title: "NYT React Search",
            image: news,
            description: "A web application that searches the New York Times for articles and can store " + 
            "them in a database. Built with HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, Mongoose, " + 
            "React.js, and Bootstrap.",
            liveLink: "https://desolate-shelf-80668.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/NYTReactSearch/"
        },
        {
            title: "Boring Political App",
            image: bill,
            description: "A web application that looks up upcoming federal bills related to a specific " + 
            "topic and notifies the user of legislative representatives to contact in order to request " + 
            "some action relating to a bill. Built by a team of five with HTML5, CSS3, Bootstrap, " + 
            "Media Queries, JavaScript, jQuery, Interact.js, Firebase, Geolocation, the Google Civic API, " + 
            "and the Propublica API.",
            liveLink: "https://boringpoliticalapp.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/Boring-Political-App/"
        },
        {
            title: "Octopied",
            image: space,
            description: "An online game in which you help your octopus get to its homeworld. Built " + 
            "by a team of four with HTML5, CSS3, Materialize, Media Queries, Animations, JavaScript, " + 
            "jQuery, Node.js, Express.js, Handlebars.js, MySQL, Sequelize.js, Passport.js, and Nodemailer.",
            liveLink: "https://octopied.herokuapp.com/",
            gitHubLink: "https://github.com/Danielthweatt/Octopied/"
        },
        {
            title: "Donation App",
            image: donation,
            description: "A sample implementation of a template for nonprofits to use as a donation " + 
            "platform for their organization. Built by a team of five with HTML5, CSS3, Bootstrap, " + 
            "Material UI, Media Queries, JavaScript, Node.js, Express.js, React.js, MongoDB, Mongoose, " +
            "Passport.js, Stripe, and Nodemailer.",
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
    };

    next = () => {
        if (this.state.index < this.state.projects.length - 1) {
            this.setState((prevState) => ({
                index: prevState.index + 1
            }));
        }
    };
    
    render() {
		return (
			<React.Fragment>
				<h2>Portfolio</h2>
		        <hr />
			    <Project projectInfo={this.state.projects[this.state.index]} />
                {this.state.index === 0 ? ( 
                    null
                ) : (
                    <button
                        id="previous-button"
                        type="button" 
                        className="btn" 
                        onClick={this.previous}
                    >
                        Previous
                    </button>
                )}
                {this.state.index === this.state.projects.length - 1 ? ( 
                    null
                ) : (
                    <button
                        id="next-button"
                        type="button"
                        className="btn"  
                        onClick={this.next}
                    >
                        Next
                    </button>
                )}
			</React.Fragment>
		);
	};
};

export default Portfolio;