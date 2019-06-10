import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import UserCampList from './UserCampList'


class UserProfile extends Component {
  state = {
    user:null
  }

  componentDidMount() {
   
  }

  


  render() {
    
    
    return (
      
      <div>
        The page of
        <h1>{this.props.user.username}</h1><br/>
        Campaign's created:
        <div>
        {this.props.user.campaigns.length>0 ?
        <span><UserCampList id={this.props.user._id} context="getCamps"/><br/></span>:
        <span>None yet!</span>}</div>
        <br/>
        <div>
        Joined:<br/>
        {this.props.user.joined.length>0 ?
        <span><UserCampList id={this.props.user._id} context="getJoined"/><br/></span>:
        <span>None yet!</span>}
        </div>

      </div>
    )
  }
}

export default withRouter(UserProfile)