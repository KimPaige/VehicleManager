import React, { Component } from 'react';
import logo from './logo.svg';
import Motorbike from './Motorbike.jpg';
import './App.css';

class Page2 extends Component {
  render() {
    return (

      //Header
      <div className="Page2">
        <header className="Page2-header">
          <img src={logo} className="Page2-logo" alt="logo" />
          <h1 className="Page2-title">Hi</h1>
        </header>

       <p className="Page2-intro">
          This page will contain table with information pertaining to different vehicles.
        </p>

       {/* Table */}
      <table className="Page2-table">
      <tbody>
         <tr id="row0">
           <td id="cell0-0" width="30%"><img src={Motorbike} alt="Motorbike" width="99%"></img></td>
           <td id="cell0-1">Honda CB125E Motorbike</td>
         </tr>
       </tbody>
     </table>
      </div>
    );
  }
}

// function myFunction() {
//   var x = document.getElementById("NavBar");
//   if (x.className === "NavBar") {
//       x.className += " responsive";
//   } else {
//       x.className = "NavBar";
//   }
// }

export default Page2;
