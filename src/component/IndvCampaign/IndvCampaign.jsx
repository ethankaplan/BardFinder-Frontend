import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CharacterItem from './CharacterItem'
import NewCharModal from './NewCharModal'
import { Form, TextArea,Modal,Button } from 'semantic-ui-react'


class IndvCampaign extends Component {
  state = {
    campaign:false,
    clearModal:false,
    idea:"",

  }

  componentDidMount() {
   this.getCampInfo()
  }

  changeHandler = async(e) => {
    await this.setState({
        idea: e.target.value
    })
    console.log(this.state.idea)
};
  getCampInfo=async()=>{
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}`)
    const camp = await res.json();
    this.setState({
        campaign:camp.campaign
    })

  }

  onSubmit=async(e)=>{
    e.preventDefault();
    const newCharRes = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}/newChar`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({idea : this.state.idea,
                              user : this.props.currentUser
                              }),
        headers:{
            "Content-type" : 'application/json'
        }
        
    })

    const parsedResponse = await newCharRes.json();
    console.log(parsedResponse)
    if(parsedResponse.username) {
      this.props.doSetCurrentUser(parsedResponse)
        this.setState({
            idea : ""
        })
    }
    this.props.history.push(this.props.location)
}
  
  

  render() {
    
    
    return (
      
      <div>
       {this.state.campaign ? 
       <div>
        <h1>{this.state.campaign.name}</h1><h3>by {this.state.campaign.owner.username}</h3><br/>
        Story idea: <small>{this.state.campaign.story}</small><br/><br/>
        
        
        Characters:<br/>
        {this.state.campaign.characters ?
        <span>None yet!</span>
        :
        this.state.campaign.characters.map((char)=>{
        
        return <CharacterItem key={char.id} char={char}/>}

        )}
        {this.props.currentUser  ?
            <Modal trigger={<Button>Add Your Character Idea</Button>}>
            <NewCharModal currentUser={this.props.currentUser} onSubmit={this.onSubmit} 
            changeHandler={this.changeHandler}/>
            </Modal>
            :
            null
        }


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