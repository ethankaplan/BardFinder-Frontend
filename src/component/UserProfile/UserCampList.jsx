import React, {Component} from 'react'
import CampItem from '../ViewAllCamps/CampItem'

class CampaignList extends Component{
    state={
        allCamps: []
    }
    
    getAllCampaigns =async ()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.id}/${this.props.context}/`)
            const camps = await res.json()
            console.log(camps.data)
            // console.log(res)
            this.setState({
                allCamps: camps.data
            })
        } catch(err) {
            console.log(err)
        }

        
    }

    componentDidMount() {
        this.getAllCampaigns()
    }
    
    // allResults = this.state.allUsers.map((user)=>{
        
    //     return <UserItem key={user.id} user={user}/>
    // })




    render(){
        
        console.log(this.state.allCamps)
        return(
            <ul>
               {
               this.state.allCamps.map((camp)=>{
        
            return <CampItem key={camp.id} camp={camp}/>
    })
               }
            
            </ul>
    )
}
}

export default CampaignList
