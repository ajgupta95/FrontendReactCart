import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


import Mainnavbar from './shopnavbar';

export default class Homepage extends Component {

    render() {
      return (
        <div>


              <Mainnavbar/>
        <h1>Welcome to Shoping Cart App On MERN</h1>



        <br>
        </br>
        <br>
        </br>
        <img src="images/myimage.png"></img>

        <br>
        </br>
        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        {/* <p>For New User <Link to="/signup">Sign Up</Link> </p>
        <p>For Old User <Link to="/login">Log In</Link> </p> */}
       
    
        </div>
      )
    }
  }
