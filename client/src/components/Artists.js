import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Artists.css";
class Artists extends React.Component {
	state = { listOfArtists: [] };
	getAllArtists = () => {
		axios
			.get(`${process.env.REACT_APP_APIURL || ""}/api/artists`)
			.then((responseFromApi) => {
				console.log("responseFromApi", responseFromApi.data.artists);
				this.setState({
					listOfArtists: responseFromApi.data.artists,
				});
			})
			.catch((err) => console.log("Error while fetching artists", err));
		//return undefined
	};
	componentDidMount() {
		//console.log(this.getAllArtists());
		this.getAllArtists();
	}
	render() {
		return (
			<div>
				<div className="container-list">
					{this.state.listOfArtists.map((artist) => {
						return (
							<div key={artist._id}>
								<div className="box-img">
									<Link to={`/artists/${artist._id}`}>
										<img src={artist.image} alt="art" />
									</Link>
									<div className="box-desc">
										<Link to={`/artists/${artist._id}`} className="title-link">
											{artist.name}
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Artists;