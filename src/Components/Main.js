import  { Component } from 'react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Vehicles from '../Screens/Vehicles';
import Upcoming_Events from '../Screens/Vehicles';

class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/Screens/Vehicles' component={Vehicles}/>
                    <Route exact path='/Screens/Upcoming_Events' component={Upcoming_Events}/>
                </Switch>
            </main>
        );
    }
}

export default Main