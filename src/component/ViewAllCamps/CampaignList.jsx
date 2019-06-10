import React, {Component} from 'react'
import CampItem from './CampItem'
import CreateCampaign from '../CreateCampaign/CreateCampaign'

class CampaignList extends Component{
    state={
        allCamps: [],
        loading:true
    }
    
    getAllCampaigns =async ()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns`)

            const camps = await res.json()
            
      
            await this.setState({
                allCamps: camps.campaigns,
                loading:false

            })
        } catch(err) {
            console.log(err)
        }

        
    }

    componentDidMount() {

        this.getAllCampaigns()
        
    }
    
   




    render(){
        

        return(
            <div>
            {this.props.currentUser ?
            <CreateCampaign currentUser={this.props.currentUser}/>
        :
        null}
            {this.state.loading ?
            <span>{this.state.loading}</span>:
            <ul>
               {
               this.state.allCamps.map((camp)=>{
            
            return <CampItem key={camp.id} camp={camp}/>
            
            })}</ul>
            }
            </div>
    )
}
}

export default CampaignList
