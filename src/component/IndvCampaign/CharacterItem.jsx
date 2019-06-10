import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
class CharItem extends Component{
   


    

     render(){
        
    return (
        <li>
            {this.props.char.user}'s idea:<br/>
            <i>{this.props.char.idea}</i>
            
            <br/>
        </li>
        
    
    )}
    
}
export default CharItem;

