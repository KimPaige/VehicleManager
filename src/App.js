import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import My_Header from './My_Header';
import My_Table from './My_Table';
import My_NavBar from './My_NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <My_Header/>
        <My_NavBar/>
        <My_Table/>


        </div>
    );
  }
}
export default App;