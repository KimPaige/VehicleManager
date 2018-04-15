import React, { Component } from 'react';
import './App.css';
import Motorbike from './Motorbike.jpg';

class My_Table extends Component{
    render(){
      return(
      <table className="Table">
      <tbody>
         <tr id="row0">
           <td id="cell0-0" width="30%">
           <a href="Page2.js"><img src={Motorbike} alt="Motorbike" width="99%"></img></a></td>
           <td id="cell0-1">Honda CB125E Motorbike</td>
         </tr>
       </tbody>
     </table>
      )
    }
}
export default My_Table;