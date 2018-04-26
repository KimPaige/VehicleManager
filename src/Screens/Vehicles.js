import React, { Component } from 'react';
import '../App.css';
import My_Header from '../Components/My_Header';
import My_Table from '../Components/My_Table';
import My_NavBar from '../Components/My_NavBar';

class Vehicles extends Component {
  render() {
    return (
      <div className="App">
        <My_Table/>
      </div>
    );
  }
}
export default Vehicles;