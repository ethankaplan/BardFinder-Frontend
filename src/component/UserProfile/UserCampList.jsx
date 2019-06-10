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
            console.log(res)
            const camps = await res.json()
            console.log(camps)
            // console.log(res)
            this.setState({
                allCamps: camps.campaigns,
                loaded:true
            })
            console.log(this.state.allCamps)
        } catch(err) {
            console.log(err)
        }

        
    }

    componentDidMount() {
        this.getAllCampaigns()
    }
    

    render(){
        console.log(this.state.allCamps)
        
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
