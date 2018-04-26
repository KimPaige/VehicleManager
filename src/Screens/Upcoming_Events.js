import React, { Component } from 'react';
import './App.css';
import My_Table from '../Components/My_Table';

class Upcoming_Events extends Component {
  render() {
    return (
      <div className="Upcoming_Events">

       <p className="Upcoming_Events-intro">
          This page will contain table with information pertaining to different vehicles.
        </p>

      <My_Table/>
      </div>
    );
  }
}

export default Upcoming_Events;
