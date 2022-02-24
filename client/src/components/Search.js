import React from "react";
import axios from "axios";
import "./Search.css";

/*
function Search() {
	const [books, setBooks] = useState(null);

	const fetchData = async () => {
		const response = await axios.get(
			"https://www.anapioficeandfire.com/api/books?pageSize=30"
		);

		setBooks(response.data);
	};

	return (
		<div className="App">
			<h1>Game of Thrones Books</h1>
			<h2>Fetch a list from an API and display it</h2>

			<div>
				<button className="fetch-button" onClick={fetchData}>
					Fetch Data
				</button>
				<br />
			</div>

			<div className="books">
				{books &&
					books.map((book, index) => {
						const cleanedDate = new Date(book.released).toDateString();
						const authors = book.authors.join(", ");

						return (
							<div className="book" key={index}>
								<h3>Book {index + 1}</h3>
								<h2>{book.name}</h2>

								<div className="details">
									<p>{authors}</p>
									<p>{book.numberOfPages} pages</p>
									<p>🏘{book.country}</p>
									<p>{cleanedDate}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Search;

*/

import { Input, Footer, Card, CardBody, CardTitle } from "mdbreact";
import { Link } from "react-router-dom";
import { Component } from "react";
import ArtsList from "./db.json";

class Search extends Component {
	state = {
		search: "",
	};

	renderArts = (arts) => {
		const { search } = this.state;

		/*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

		return (
			<div className="col-md-3" style={{ marginTop: "20px" }}>
				<Card>
					<CardBody>
						<p className=""></p>
						<Link to={`/arts/${arts}`}>
							<h3>{arts.name}</h3>
						</Link>
						<div className="desc"></div>

						<CardTitle title={arts.name}>
							<img src={arts.image} alt=""></img>
						</CardTitle>
					</CardBody>
				</Card>
			</div>
		);
	};

	onchange = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		const { search } = this.state;
		const filteredCountries = ArtsList.filter((arts) => {
			return arts.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		});

		return (
			<div className="flyout">
				<main style={{ marginTop: "4rem" }}>
					<div className="container">
						<div className="row">
							<div className="col-12"></div>
							<div className="col">
								<Input
									label="Search Arts"
									icon="search"
									onChange={this.onchange}
								/>
							</div>
							<div className="col" />
						</div>
						<div className="row">
							{filteredCountries.map((arts) => {
								return this.renderArts(arts);
							})}
							<Link to={`/workarts/`}></Link>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default Search;
