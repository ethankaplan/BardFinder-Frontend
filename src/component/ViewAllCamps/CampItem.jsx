import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
class CampItem extends Component{
   
state={
   theCamp:null,
   owner:""
}

    componentDidMount(){
        this.getCamp();
    }
    getCamp=async()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/view/${this.props.camp._id}`)
        const camp = await res.json()
        console.log(camp)
        this.setState({
            theCamp : camp.campaign
        })
    }
     render(){
         
        return (
            
            <li>
                {this.state.theCamp ?
                
                <Link to={`${routes.CAMP}/view/${this.props.camp._id}`}>
                    
                {this.state.theCamp.name} by {this.state.theCamp.owner.username}<br/>
                <small>{this.state.theCamp.story}</small> </Link>
                
                :
                <span>Loading</span>}
            </li>
            
        
                )}
        
}
export default CampItem;

