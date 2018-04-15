import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class My_Header extends Component {
  render() {
    return (
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Vehicle Manager Home</h1>
        </header>
    );
  }
}
export default My_Header;


