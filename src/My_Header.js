import React, { Component } from 'react';
import logo from './Logo.png';
import './App.css';

class My_Header extends Component {
  render() {
    return (
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h3 className="Header-title">Vehicle Manager Home</h3>
        </header>
    );
  }
}
export default My_Header;


