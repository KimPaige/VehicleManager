import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vehicle Manager Home</h1>
        </header>
        <p className="App-intro">
          This page will contain table with information pertaining to different vehicles.
        </p>

      <table className="App-table">
      <tbody>
         <tr id="row0">
           <td id="cell0-0">Make: </td>
           <td id="cell0-1">Honda </td>
         </tr>
         <tr id="row1">
           <td id="cell1-0">Model: </td>
           <td id="cell2-1">CBE </td>
         </tr>
         <tr id="row2">
           <td id="cell2-0">Year: </td>
           <td id="cell2-1">2016 </td>
         </tr>
         <tr id="row3">
           <td id="cell3-0">Registration: </td>
           <td id="cell0-0">XXX111 </td>
         </tr>
       </tbody>
     </table>
      </div>
    );
  }
}

export default App;
