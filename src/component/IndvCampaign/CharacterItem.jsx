import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
class CharItem extends Component{
   


    

     render(){
        
    return (
        <li>
            {this.props.char.username}'s idea:<br/>
            {this.props.char.idea}
            
            <br/>
        </li>
        
    
    )}
    
}
export default CharItem;

