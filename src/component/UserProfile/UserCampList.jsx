import React, {Component} from 'react'
import CampItem from '../ViewAllCamps/CampItem'

class CampaignList extends Component{
    state={
        allCamps: [],
        loaded:false
    }
    
    getAllCampaigns =async ()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.id}/${this.props.context}/`)

            const camps = await res.json()

            this.setState({
                allCamps: camps.campaigns,
                loaded:true
            })

        } catch(err) {

        }

        
    }

    componentDidMount() {
        this.getAllCampaigns()
    }
    

    render(){

        
        return(
        <div>
            {this.state.loaded
                ?
            <ul>
               {
               this.state.allCamps.map((camp)=>{
        
            return <CampItem key={camp.id} camp={camp}/>
    })
               }
            
            </ul>:

            <span>Loading</span>}
        </div>

)
}
}

export default CampaignList
