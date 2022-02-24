import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class WorkartDetails extends Component {
	state = {
		favorited: null,
		counter: 0,
	};
	// monter le composant single artist
	componentDidMount() {
		this.getSingleWorkart();
	}
	//
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
	addFavorite = () => {
		const { params } = this.props.match;
		axios.put(
			`http://localhost:5005/add/${params.id}/favorite`,
			{},
			{ withCredentials: true }
		);
		this.setState({ counter: this.state.counter + 1 })
			.then((res) => console.log(res.data))
			.catch((err) => {
				console.log(err);
			});
	};
	removeFavorite = () => {
		const { params } = this.props.match;
		axios.put(
			`http://localhost:5005/delete/${params.id}/favorite`,
			{},
			{ withCredentials: true }
		);
		this.setState({ counter: this.state.counter - 1 })
			.then((res) => console.log(res.data))
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				{/*base du cours
        <div>this is the artist detail</div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        */}

				{
					// <button onClick={() => this.addFavorite()}>étoile2</button>
				}
				<div id="page">
					<div className="card">
						<div className="half half-left">
							<div className="img-container">
								<img src={this.state.image} alt="" />
							</div>
						</div>
						<div className="half half-right">
							<h2 className="name">{this.state.name}</h2>
							<p>Hello this is the artist page</p>
							<h3 className="bio">Infos</h3>
							<div className="my-button">
								{this.state.counter === 1 ? (
									<div>
										<button onClick={() => this.removeFavorite()}>♥︎</button>
										<p>
											The workart has been added to your favorites collection.
										</p>
									</div>
								) : (
									<button onClick={() => this.addFavorite()}>♡</button>
								)}
							</div>
							<p>{this.state.description}</p>
							<h3 className="location">price</h3>
							<p></p>
							{/*
        <WorkartByArtist getData={() => this.getWorkartByArtist()}/> {/* <== !!!*/}
							<Link to={"/"}>Homepage</Link>
						</div>
						<div class="triangle">
							<ul>
								<li>
									<a href="#" class="fa fa-instagram"></a>
								</li>
							</ul>
							<span>
								Kore'art is a fictive project for learning purpose only. We have
								no connection with the artist below
							</span>
						</div>
						<a href="#" class="fa fa-plus"></a>
					</div>
				</div>
			</div>
		);
	}
}
export default WorkartDetails;
