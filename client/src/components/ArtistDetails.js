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
          // axios.get
        })
        .catch((err)=>{
          console.log('Error while fetching project', err)
        })
  }

  getWorkartsById = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5005/artists/${params.id}/workarts`)
      .then( responseFromApi =>{
        const theWorkartsOfArtist = responseFromApi.data;
        this.setState(theWorkartsOfArtist);
        // axios.get
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


        { /* essai workarts
          conditions : 
          1. si présence de workarts dans la db où artist id = this.state id,
          2. populate workarts et map 

        */}
         
        { this.state.workarts && this.workarts.length > 0 && <h3>Workarts </h3> }
        { this.state.workarts && this.state.workarts.map((workart, index) => {
          return(
            <div key={workart._id}>
              {/* ... make each task's title a link that goes to the task details page */}
              <Link to={`/workarts/${this.state._id}`}> 
                {this.state.workart.title}
              </Link>
            </div>
          )
            
        }) }


        {/* essai workarts*/}



        <Link to={'/'}>Homepage</Link>
      </div>
    )
  }
}

export default ArtistDetails;