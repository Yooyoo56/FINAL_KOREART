import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onSubjectChange(event) {
		this.setState({ subject: event.target.value });
	}

	onMsgChange(event) {
		this.setState({ message: event.target.value });
	}
	submitEmail(e) {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:5005/contact",
			data: this.state,
		}).then((response) => {
			console.log("response=====>", response);
			if (response.data.status === "success") {
				alert("Message Sent.");
				this.resetForm();
			} else if (response.data.status === "fail") {
				alert("Message failed to send.");
			}
		});
	}

	resetForm() {
		this.setState({ name: "", email: "", subject: "", message: "" });
	}
	render() {
		return (
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h2 className="title">Contact Us</h2>
								<p>
									Let us know what you think! In order to provide better
									service, please do not hesitate to give us your feedback.
									Thank you.
								</p>
								<hr />
								<form
									id="contact-form"
									onSubmit={this.submitEmail.bind(this)}
									method="POST"
								>
									<div className="form-group">
										<div className="row">
											<div className="col-md-6">
												<input
													placeholder="Name"
													id="name"
													type="text"
													className="form-control"
													required
													value={this.state.name}
													onChange={this.onNameChange.bind(this)}
												/>
											</div>
											<div className="col-md-6">
												<input
													placeholder="Email"
													id="email"
													type="email"
													className="form-control"
													aria-describedby="emailHelp"
													required
													value={this.state.email}
													onChange={this.onEmailChange.bind(this)}
												/>
											</div>
										</div>
									</div>
									<div className="form-group">
										<input
											placeholder="Subject"
											id="subject"
											type="text"
											className="form-control"
											required
											value={this.state.subject}
											onChange={this.onSubjectChange.bind(this)}
										/>
									</div>
									<div className="form-group">
										<textarea
											placeholder="Message"
											id="message"
											className="form-control"
											rows="1"
											required
											value={this.state.message}
											onChange={this.onMsgChange.bind(this)}
										/>
									</div>
									<button type="submit" className="primary-btn submit">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

/*
const Contact = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [result, setResult] = useState(null);

	const sendEmail = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:5005/contact", { ...state })
			.then((response) => {
				setResult(response.data);
				setState({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			})
			.catch(() => {
				setResult({
					success: false,
					message: "Something went wrong. Try again later",
				});
			});
	};

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<div>
			{result && (
				<p className={`${result.success ? "success" : "error"}`}>
					{result.message}
				</p>
			)}
			<form onSubmit={sendEmail}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						value={state.name}
						placeholder="Enter your full name"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						name="email"
						value={state.email}
						placeholder="Enter your email"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="subject">
					<Form.Label>Subject</Form.Label>
					<Form.Control
						type="text"
						name="subject"
						value={state.subject}
						placeholder="Enter subject"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="subject">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						name="message"
						value={state.message}
						rows="3"
						placeholder="Enter your message"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Send
				</Button>
			</form>
		</div>
	);
};

export default Contact;
*/
