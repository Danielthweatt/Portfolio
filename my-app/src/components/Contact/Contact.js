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
        alert(this.state.name);
        alert(this.state.email);
        alert(this.state.message);
    };

	render() {
		return (
			<React.Fragment>
		        <h2>Contact Me</h2>
		        <hr />
		        <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <br />
                            <input 
                                type="text" 
                                name="name"
                                value={this.state.name} 
                                onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Email:
                        <br />
                            <input 
                                type="text" 
                                name="email"
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                            />
                    </label>
                    <label>
                        Message:
                        <br />
                            <textarea
                                name="message"
                                value={this.state.message} 
                                onChange={this.handleInputChange}
                            />
                    </label>
                    <input 
                        id="submit-button"
                        type="submit"
                        className="btn" 
                        value="Submit" 
                    />
		        </form>
	        </React.Fragment>
		);
	};
}

export default Contact;