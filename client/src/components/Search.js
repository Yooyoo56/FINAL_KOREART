import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

class Search extends React.Component {
	state = {
		listOfWorkarts: [],
		search: "",
	};

	getAllWorkarts = () => {
		axios
			.get(`${process.env.REACT_APP_APIURL || ""}/api/workarts`)
			.then((responseFromApi) => {
				console.log("responseFromApi", responseFromApi.data.workarts);
				this.setState({
					listOfWorkarts: responseFromApi.data.workarts,
				});
			})
			.catch((err) => console.log("Error while fetching workarts", err));
		//return undefined
	};
	componentDidMount() {
		this.getAllWorkarts();
	}
	onchange = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		const { search } = this.state;
		const searchArts = this.state.listOfWorkarts.filter((arts) => {
			return arts.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		});

		return (
			<div className="first-section">
				<div className="section">
					<h2 className="search-h2"> Search Arts</h2>
					<input
						placeholder="Search artworks ..."
						icon="search"
						onChange={this.onchange}
					></input>
					<div className="container-list">
						{searchArts.map((workart) => {
							return (
								<div key={workart._id}>
									<div className="box-img">
										<Link to={`/workarts/${workart._id}`}>
											<img src={workart.image} alt="art" />
										</Link>
										<div className="box-desc">
											<Link to={`/workarts/${workart._id}`}>
												<h3>{workart.name}</h3>
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default Search;
