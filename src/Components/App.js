import React, { Component } from 'react';
import My_Header from './My_Header';
import My_Footer from './My_Footer';
import Main from './Main';
import My_NavBar from './My_NavBar';

class App extends Component {
    render (){
        return (
            <div>
            <My_Header/>
            <My_NavBar/>
            <Main/>
            <My_Footer/>
            </div>
        );
    }
}
export default App;