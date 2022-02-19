import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class WorkartByArtist extends Component {
  state = {}

  // monter le composant single artist
  componentDidMount(){
    this.getWorkartByArtist();
  }

  // 👨‍🏫
  getWorkartByArtist = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5005/artists/${params.id}/workarts`)
        .then( responseFromApi =>{
          const theWorkartsByArtist = responseFromApi.data;
          this.setState(theWorkartsByArtist);
          // axios.get
        })
        .catch((err)=>{
          console.log('Error while fetching the workarts by artist', err)
        })
  }

  render(){
    return(
        <div>

          <h1>Workarts by Artist</h1>

          <div>
            { this.state.theWorkartsByArtist.map (selectedWorkarts => {
              return (
                <div key={selectedWorkarts._id}>
                  <Link to={`/artists/${selectedWorkarts._id}`}>
                    <h3>{selectedWorkarts.name}</h3>
                  </Link>
        </div>
              )})
            }
          </div>
          
        </div>
      )
  }
}

export default WorkartByArtist;