import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class WorkartDetails extends Component {
  state = {}

  // monter le composant single artist
  componentDidMount(){
    this.getSingleWorkart();
  }

  // 👨‍🏫
  getSingleWorkart = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5005/workarts/${params.id}`)
        .then( responseFromApi =>{
          const theWorkart = responseFromApi.data;
          console.log("the workart",theWorkart);
          this.setState(theWorkart);
        })
        .catch((err)=>{
          console.log('Error while fetching workart', err)
        })
  }


  render(){
      console.log("this state",this.state);
    return(
      <div>
        <div>this is the workart detail</div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>

        <Link to={'/'}>Homepage</Link>
      </div>
    )
  }
}

export default WorkartDetails;