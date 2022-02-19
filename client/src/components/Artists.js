import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


class Artists extends React.Component {
    state = { listOfArtists: [] }

        getAllArtists = () => {
            axios.get('http://localhost:5005/artists')

            .then(responseFromApi => {
                console.log("responseFromApi",responseFromApi.data.artists)
                this.setState({
                    listOfArtists: responseFromApi.data.artists
                })
            })
            .catch(err => console.log('Error while fetching artists', err))
            //return undefined
        }
        
        componentDidMount() {
            //console.log(this.getAllArtists());
            this.getAllArtists();
        }
    

        render(){
            return(
              <div>

                <h1>Hello, this is the artists page!</h1>

                <div>
                  { this.state.listOfArtists.map( artist => {
                    return (
                      <div key={artist._id}>
                        <Link to={`/artists/${artist._id}`}>
                          <h3>{artist.name}</h3>
                        </Link>
                      </div>
                    )})
                  }
                </div>
                
              </div>
            )
        }
}



export default Artists;
