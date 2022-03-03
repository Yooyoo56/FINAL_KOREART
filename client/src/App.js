import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";

//import the autService! (to link backend-frontend)
import authService from "./components/auth-service.js";

//import the navbar
import Navbar from "./components/Navbar";

//import the route of the each page
import Home from "./components/Home";
import Artists from "./components/Artists";
import ArtistDetails from "./components/ArtistDetails";
import WorkartByArtist from "./components/WorkartByArtist";
import Workarts from "./components/Workarts";
import WorkartDetails from "./components/WorkartDetails";
import Gallery from "./components/Gallery";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Search from "./components/Search";

class App extends Component {
	state = {
		user: {}, // {}
	};

	fetchUser = () => {
		console.log("this state user", this.state.user);
		if (!this.state.user._id) {
			authService
				.loggedin()
				.then((data) => {
					console.log("data", data);
					this.setState({ user: data });
					console.log("user after set state", this.state.user);
				})
				.catch((err) => this.setState({ user: false }));
		} else {
			console.log("user already in the state");
		}
	};

	updateUser = (data) => {
		this.setState({ user: data });
	};

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		return (
			<Route
				render={(props) => (
					<div className="App" data-route={props.location.pathname}>
						{" "}
						{/* data-route="/" allow us to style pages */}
						<Navbar user={this.state.user} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => <Home user={this.state.user} />}
							/>

							<Route exact path="/artists" component={Artists} />
							<Route exact path="/artists/:id" component={ArtistDetails} />
							<Route
								exact
								path="/artists/:id/workarts"
								component={WorkartByArtist}
							/>
							<Route exact path="/workarts" component={Workarts} />

							{/**instancier apps ==> render = {props}  */}
							<Route
								exact
								path="/workarts/:id"
								//component={WorkartDetails}
								render={(routerProps) => (
									<WorkartDetails
										{...routerProps}
										updateUser={this.updateUser}
									/>
								)}
							/>

							<Route exact path="/gallery" component={Gallery} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/search" component={Search} />
							<Route
								exact
								path="/signup"
								render={(props) => (
									<Signup
										updateUser={this.updateUser}
										history={props.history}
									/>
								)}
							/>

							<Route
								exact
								path="/login"
								render={(props) => (
									<Login updateUser={this.updateUser} history={props.history} />
								)}
							/>

							<Route
								exact
								path="/profile"
								render={(props) => (
									<Profile
										user={this.state.user}
										updateUser={this.updateUser}
										history={props.history}
									/>
								)}
							/>

							{/* last route, ie: 404 */}
							<Route render={() => <h1>Not Found</h1>} />
						</Switch>
					</div>
				)}
			/>
		);
	}
}

export default App;

/*
function App() {
  return (
    <div className="App">
    <Switch> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/artists" component={Artists}/>
      <Route exact path="/workarts" component={Workarts}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>

    </Switch>
    </div>
  );
}

export default App;


*/
