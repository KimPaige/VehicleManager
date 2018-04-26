import React, { Component } from 'react';
import My_Header from './My_Header';
import My_Footer from './My_Footer';
import Main from './Main';

class App extends Component {
    render (){
        return (
            <div>
            <My_Header/>
            <Main/>
            <My_Footer/>
            </div>
        );
    }
}
export default App;