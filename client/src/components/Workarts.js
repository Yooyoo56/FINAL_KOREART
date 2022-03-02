import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Workarts extends React.Component {
	state = { listOfWorkarts: [] };
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
	render() {
		return (
			<div>
				<div className="container-list">
					{this.state.listOfWorkarts.map((workart) => {
						return (
							<div key={workart._id}>
								<div className="box-img">
									<Link to={`/workarts/${workart._id}`}>
										<img src={workart.image} alt="art" />
									</Link>
									<div className="box-desc">
										<Link to={`/workarts/${workart._id}`} className="title-link">
											{workart.name}
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
export default Workarts;
