import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class IndvCampaign extends Component {
  state = {
    campaign:false
  }

  componentDidMount() {
   this.getCampInfo()
  }
  getCampInfo=async()=>{
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}`)
    const camp = await res.json();
    this.setState({
        campaign:camp.campaign
    })

  }

  render() {
    console.log(this.state.campaign)
    
    return (
      
      <div>
       {this.state.campaign ? 
       <div>
           Loaded, {this.state.campaign.name}
       </div>
       :
       <div>
           Loading
       </div>
    
        }

      </div>
    )
  }
}

export default withRouter(IndvCampaign)