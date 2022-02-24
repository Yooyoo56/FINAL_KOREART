import React, { Component } from "react";
import { Input, Footer, Card, CardBody, CardTitle } from "mdbreact";

import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

class Search extends React.Component {
	state = {
		listOfWorkarts: [],
		search: "",
	};

	renderArts = (arts) => {
		const { search } = this.state;
		return (
			<div>
				<h3>{arts.name}</h3>
				<img src={arts.image} alt=""></img>
			</div>
		);
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
			return arts.name.toLowerCase().indexOf(search.toLowerCase()) == -1;
		});

		return (
			<div>
				<div className="container-list">
					<div className="Search">
						<Input
							label="Search Arts"
							icon="search"
							onChange={this.onchange}
						></Input>
					</div>
					{this.state.listOfWorkarts.map((workart) => {
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

									<div>
										{searchArts.map((arts) => {
											return this.renderArts(arts);
										})}
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
export default Search;

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
