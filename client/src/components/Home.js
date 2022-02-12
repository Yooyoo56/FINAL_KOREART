

import React from 'react';
import { Link } from 'react-router-dom'


class Home extends React.Component {
    render (){
        return (
            <>
            Home page 
            <div className= "first-homepage-container">
                    <h1><Link to="/artists">All artists</Link></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. </p>          
            </div>
            <div className= "second-homepage-container">
                    <h1><Link to="/workarts">All Workarts</Link></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. </p>          
            </div>
                   <div className= "third-homepage-container">
                    <h1><Link to="/gallery">Our gallery</Link></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. </p>          
            </div>

              <div className="cta">
              <Link className="btn" to="/signup">Sign up</Link>
              <Link className="btn" to="/login">Log in</Link>
            </div>
            </>
        )
    }
}
export default Home;


/*

import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import Popin from '../Popin.js';

export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/profile" />
      ) : (
        <Popin one={(
          <>
            <h1>IronProfile</h1>
            <p>Today we will create an app with authorization, adding some cool styles !</p>

            <div className="cta">
              <Link className="btn" to="/signup">Sign up</Link>
              <Link className="btn" to="/login">Log in</Link>
            </div>
          </>
        )} />
      )}
    </>
  );
}



*/