import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Workarts extends React.Component {
    state = { listOfWorkarts: [] }

        getAllWorkarts = () => {
            axios.get('http://localhost:5005/workarts')

            .then(responseFromApi => {
                console.log("responseFromApi",responseFromApi.data.workarts)
                this.setState({
                    listOfWorkarts: responseFromApi.data.workarts
                })
            })
            .catch(err => console.log('Error while fetching workarts', err))
            //return undefined
        }
        
        componentDidMount() {
            this.getAllWorkarts();
        }
    

        render(){
            return(
              <div>

                <h1>Hello, this is the workarts page!</h1>

                <div>
                  { this.state.listOfWorkarts.map( workart => {
                    return (
                      <div key={workart._id}>
                        <Link to={`/workarts/${workart._id}`}>
                          <h3>{workart.name}</h3>
                        </Link>
                      </div>
                    )})
                  }
                </div>
                
              </div>
            )
        }
}


export default Workarts;

