import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/admin" className="navbar-brand">Sign Up</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav" >
     
        <li className="navbar-item">
          <Link to="/adminlogin" className="nav-link">Log In</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/addproducts" className="nav-link"> Add Products</Link>
          </li>
        
          <li className="navbar-item">
          <Link to="/adminproducts" className="nav-link">Products</Link>
          </li> */}
          <li className="navbar-item">
          <Link to="/" className="nav-link">Shop</Link>
          </li>
         
        </ul>
        </div>
      </nav>
    );
  }
}
