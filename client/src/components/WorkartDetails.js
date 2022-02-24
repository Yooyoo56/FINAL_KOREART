import React, { Component, useReducer, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class WorkartDetails extends Component {
	state = {
		isActive: true,
		show: true,
	};

	// monter le composant single artist
	componentDidMount() {
		this.getSingleWorkart();
	}

	// 👨‍🏫
	getSingleWorkart = () => {
		const { params } = this.props.match;
		axios
			.get(`http://localhost:5005/workarts/${params.id}`)
			.then((responseFromApi) => {
				const theWorkart = responseFromApi.data;
				console.log("the workart", theWorkart);
				this.setState(theWorkart);
			})
			.catch((err) => {
				console.log("Error while fetching workart", err);
			});
	};

	buttonDisappear = () => {
		this.setState(() => ({
			show: !this.state.show,
		}));
	};

	addFavorite = () => {
		const { params } = this.props.match;
		axios
			.put(
				`http://localhost:5005/add/${params.id}/favorite`,
				{},
				{ withCredentials: true }
			)
			.then((res) => console.log(res.data))

			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		console.log("this state==>", this.state);

		return (
			<div>
				{/**After clicked the button, it disappeared! */}
				{this.state.show ? (
					<div>
						<button onClick={this.buttonDisappear}>
							<a href onClick={() => this.addFavorite()}>
								⭐️
							</a>
						</button>{" "}
					</div>
				) : null}
				<div>this is the workart detail</div>
				{/**Not working properly ==> try to disable the button when I clicked */}
				{/*this.state.show ? (
					<div>
						{" "}
						{this.state.show ? (
							<div>
								<button onClick={() => this.addFavorite()}>Etoile</button>{" "}
							</div>
						) : (
							<div>
								<button disabled={true}> Etoile</button>
							</div>
						)}
					</div>
				) : null*/}
				<h1>{this.state.name}</h1>
				<p>{this.state.description}</p>
				<Link to={"/"}>Homepage</Link>
			</div>
		);
	}
}

export default WorkartDetails;
