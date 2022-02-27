import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WorkartByArtist from "./WorkartByArtist";

import "./ArtistDetails.scss";

class ArtistDetails extends Component {
	state = {};

	// monter le composant single artist
	componentDidMount() {
		this.getSingleArtist();
	}

	// 👨‍🏫
	getSingleArtist = () => {
		const { params } = this.props.match;
		axios
			.get(`${process.env.REACT_APP_APIURL || ""}/api/artists/${params.id}`)
			.then((responseFromApi) => {
				const theArtist = responseFromApi.data;
				this.setState(theArtist);
				// axios.get
			})
			.catch((err) => {
				console.log("Error while fetching artist", err);
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
				<div id="page">
					<div className="card-class">
						<div className="half half-left">
							<div className="img-container">
								<img src={this.state.image} alt="" />
							</div>
						</div>
						<div class="half half-right">
							<h2 className="name">{this.state.name}</h2>
							<p>Hello this is the artist page</p>
							<h3 className="bio">Bio</h3>
							<p>{this.state.description}</p>
							<h3 className="location">Location</h3>
							<p>{this.state.city}</p>
							{/*
            <h3 className="location">Price</h3>
							<p>{this.state.}</p>
            */}

							{/*
        <WorkartByArtist getData={() => this.getWorkartByArtist()}/> {/* <== !!! 
      👨‍🏫*/}
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

export default ArtistDetails;
