import React, { Component } from 'react';
import '../App.css';

class My_NavBar extends Component{
    render(){
        return (
            <div class="HorzNav">
                <a href="#Vehicles" class="active">Vehicles</a>
                <a href="#Add">Add Vehcile</a>
                <a href="#Upcoming">Upcoming Events</a>
            </div>
        )
    } 
}
export default My_NavBar; 