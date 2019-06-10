import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CharacterItem from './CharacterItem'
import NewCharModal from './NewCharModal'
import EditCampModal from './EditCampModal'
import { Form, TextArea,Modal,Button } from 'semantic-ui-react'
import * as routes from '../../constants/routes'


class IndvCampaign extends Component {
  state = {
    campaign:false,
    
    story:"",
    idea:"",

  }

  componentDidMount() {
   this.getCampInfo()

  }

  changeHandler = (e) => {
     this.setState({
        idea: e.target.value
    })
    console.log(this.state.idea)
};
changeStory = (e) => {
    this.setState({
       story: e.target.value
   })
   console.log(this.state.story)
};
    
  getCampInfo=async()=>{
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}`)
    const char = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}/chars`)
    const camp = await res.json();
    const charJson=await char.json()
    console.log(charJson)
    this.setState({
        campaign:camp.campaign,
        characters:charJson,
        story:camp.campaign.story
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
        }})
    const parsedResponse = await newCharRes.json();
    console.log(parsedResponse)
        this.setState({
            idea : ""
        })
    
    this.props.history.push(this.props.location)
}
  

    deleteCamp=async()=>{
        try{
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.state.campaign._id}/${this.state.campaign.owner}`, {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedData = await data.json();
        this.props.history.push(routes.HOME)
    }catch(err){
        console.log(err)
    }}

    editStory = async()=>{
        try {
            
          const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.state.campaign._id}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({story:this.state.story}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const parsedData = await data.json();
          console.log(parsedData)
        } catch (error) {
          console.log(error)
        }
      }
    
 

  render() {
    
    
    return (
      
      <div>
       {this.state.campaign ? 
       <div>
        <h1>{this.state.campaign.name}</h1><h3>by {this.state.campaign.owner.username}</h3><br/>
        Story idea: <small>{this.state.campaign.story}</small><br/><br/>
        
        
        Characters:<br/>
        {this.state.campaign.characters.length>0 ?
        this.state.campaign.characters.map((char)=>{
        
        return <CharacterItem key={char.id} char={char} />}
            
        ):
        <span>None yet!<br/></span>
        }
        {this.props.currentUser  ?
            <Modal trigger={<Button onClick={()=>this.setState({clearModal:true})}>Add Your Character Idea</Button>}>
            <NewCharModal currentUser={this.props.currentUser} onSubmit={this.onSubmit} 
            changeHandler={this.changeHandler}/>
            </Modal>
            :
            null
        }
       <EditCampModal changeHandler ={this.changeStory} story={this.state.story} editStory={this.editStory} /><br/>
       <button onClick={this.deleteCamp}>DELETE</button>


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