import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
class CampItem extends Component{
   


    

     render(){
        
    return (
        <li>
            <Link to={`${routes.CAMP}/view/${this.props.camp._id}`}>
            {this.props.camp.name}<br/>
            <small>{this.props.camp.story}</small> </Link>
            
            <br/>
        </li>
        
    
    )}
    
}
export default CampItem;

