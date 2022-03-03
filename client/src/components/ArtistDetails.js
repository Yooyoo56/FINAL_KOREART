import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ArtistDetails.scss";

class ArtistDetails extends Component {
	state = {
		aristsWorkart: [],
	};

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
				console.log("theArtist==>", theArtist);

				{
					/** //add the another axois get to get the artwork data of each artist
					axios
					.get(
						`${process.env.REACT_APP_APIURL || ""}/api/artists/${
							theArtist._id
						}/workarts`
					)
					.then((response) => {
						console.log("THEN aristsWorkart ===>", response);
						this.setState({ aristsWorkart: response.data.workarts });
					})
					.catch((err) => {
						console.log("Error while fetching artist's workart", err);
					});
			*/
				}

				console.log("theAritst=====>", responseFromApi.data);
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
							<Link to={"/artists"} className="create-link">
								{" "}
								>> Go back and check the artists
							</Link>
						</div>
						<div class="triangle">
							{/*
							<ul>
								<li>
									<a href="#" class="fa fa-instagram"></a>
								</li>
							</ul>
						*/}
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
