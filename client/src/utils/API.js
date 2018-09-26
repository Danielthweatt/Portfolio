import axios from 'axios';

export default {
	sendEmail(newEmail) {
		return axios.post('/api/email', newEmail);
	}
};