import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {
        name: null,
        email: null,
        message: null
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
    };

	render() {
		return (
			<React.Fragment>
		        <h2>Contact Me</h2>
		        <hr />
		        <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                            <input 
                            type="text" 
                            name="name"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Email:
                            <input 
                            type="text" 
                            name="email"
                            value={this.state.email} 
                            onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Message:
                            <textarea
                            name="message"
                            value={this.state.message} 
                            onChange={this.handleInputChange}
                            />
                    </label>
                    <input type="submit" value="Submit" />
		        </form>
	        </React.Fragment>
		);
	};
}

export default Contact;