import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class My_NavBar extends Component{
    render(){
        return (
            <div class="HorzNav">
                    <a><NavLink exact activeClassName = "current" to ="/Screens/Vehicles" className='linkClass'>Vehicles</NavLink></a>
                    <a><NavLink exact activeClassName = "current" to ="/Screens/Upcoming_Events" className='linkClass'>Upcoming Events</NavLink></a>
            </div>
        )
    } 
}
export default My_NavBar; 