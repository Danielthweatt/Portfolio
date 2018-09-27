import React, { Component } from 'react';
import API from '../../utils/API';
import './Contact.css';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        hasMessageToDisplay: false,
        messageToDisplay: ''
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        this.setState({
            name: '',
            email: '',
            message: '',
            hasMessageToDisplay: true,
            messageToDisplay: 'Sending message...'
        });
        API.sendEmail(newMessage).then(res => {
            this.setState({
                messageToDisplay: 'Message sent.'
            });
            const sentMessage = res.data;
            console.log('Message sent:');
            console.log(` Name: ${sentMessage.name}`);
            console.log(` Email: ${sentMessage.email}`);
            console.log(` Message: ${sentMessage.message}`);
        }).catch(err => {
            console.log('Oh boy, it broke: ');
            console.log(err);
        });
    };

	render() {
		return (
			<React.Fragment>
		        <h2>Contact Me</h2>
		        <hr />
                {this.state.hasMessageToDisplay ? (
                    <p id="message">
                        {this.state.messageToDisplay}
                    </p>
                ) : (
                    <React.Fragment>
                        <p>
                            You can send me a message here, or feel free to email 
                            me directly at dthweatt192@gmail.com.
                        </p>
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
                )}
	        </React.Fragment>
		);
	};
}

export default Contact;