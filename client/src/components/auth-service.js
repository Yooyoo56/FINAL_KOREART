// components//auth-service.js
// this page is to linked to the back-end(server) side and the client side??

import axios from 'axios';

export default {
	service: axios.create({
		baseURL: `${process.env.REACT_APP_APIURL || ""}/api/auth`, // en dev: http://localhost:/auth ALORS en prod /auth
		withCredentials: true,
		//  baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
	}),
	
	login(email, password) {
		return this.service
			.post("/sessions", { email, password })
			.then((response) => response.data);
	},
	signup(email, password, firstname, city) {
		return this.service
			.post("/users", {
				email,
				password,
				firstname,
				city,
			})
			.then((response) => response.data);
	},
	/*	edit(email, password, firstname, city) {
		return this.service
			.post("/edit", {
				email,
				password,
				firstname,
				city,
			})
			.then((response) => response.data);
	},*/
	loggedin() {
		return this.service.get("/loggedin").then((response) => response.data);
	},
	logout() {
		return this.service.get("/logout", {}).then((response) => response.data);
	},
};
