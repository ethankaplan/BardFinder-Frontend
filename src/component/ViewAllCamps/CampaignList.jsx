import React, {Component} from 'react'
import CampItem from './CampItem'

class CampaignList extends Component{
    state={
        allCamps: [],
        loading:true
    }
    
    getAllCampaigns =async ()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns`)
            console.log(res)
            const camps = await res.json()
            
            console.log(camps)
            // console.log(res)
            this.setState({
                allCamps: camps.campaigns,
                loading:false

            })
        } catch(err) {
            console.log(err)
        }

        
    }

    componentDidMount() {
        console.log("mount")
        this.getAllCampaigns()
    }
    
    // allResults = this.state.allUsers.map((user)=>{
        
    //     return <UserItem key={user.id} user={user}/>
    // })




    render(){
        
        
        return(
            <div>
            {this.state.loading ?
            <span>LOADING</span>:
            <ul>
               {
               this.state.allCamps.map((camp)=>{
        
            return <CampItem key={camp.id} camp={camp}/>
            })}
            </ul>}
            </div>
    )
}
}

export default CampaignList
