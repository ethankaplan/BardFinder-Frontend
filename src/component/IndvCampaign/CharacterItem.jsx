import React, {Component} from 'react';

class CharItem extends Component{
   


    

     render(){
        
    return (
        <li>
            {this.props.char.user.username}'s idea:<br/>
            <i>{this.props.char.idea}</i>
            
            <br/>
        </li>
        
    
    )}
    
}
export default CharItem;

