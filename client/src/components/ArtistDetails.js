import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArtistDetails extends Component {
  state = {}

  // monter le composant single artist
  componentDidMount(){
    this.getSingleArtist();
  }

  // 👨‍🏫
  getSingleArtist = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5005/artists/${params.id}`)
        .then( responseFromApi =>{
          const theArtist = responseFromApi.data;
          this.setState(theArtist);
        })
        .catch((err)=>{
          console.log('Error while fetching project', err)
        })
  }


  render(){
    return(
      <div>
        {/*👨‍🏫*/}
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>

        <Link to={'/'}>Homepage</Link>
      </div>
    )
  }
}

export default ArtistDetails;