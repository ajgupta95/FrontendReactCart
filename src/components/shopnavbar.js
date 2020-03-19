import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">Shop</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav" >
     
        
          <li className="navbar-item">
          <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/cart" className="nav-link">Your Cart</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Admin</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}
