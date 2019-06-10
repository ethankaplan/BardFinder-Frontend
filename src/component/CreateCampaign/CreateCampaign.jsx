import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, TextArea,Modal,Button } from 'semantic-ui-react'
import * as routes from '../../constants/routes'

class CreateCampaign extends Component{
    state={
        name:"",
        story:""
    }


    changeHandler = async(e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.name)
    };


    onSubmit = async (e) => {
        e.preventDefault();
        console.log("button")
        const createRes = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify({
                name:this.state.name,
                story:this.state.story,
                owner:this.props.currentUser._id}),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        

         const parsedResponse = await createRes.json();
        
         console.log(parsedResponse)
        this.props.history.push(`${routes.CAMP}/view/${parsedResponse.theid}`)
        
            
    }




render(){
    return(
        <Modal trigger={<Button>Create a Campaign</Button>}>
            <Modal.Header>Let's outline the campaign</Modal.Header>
            <Modal.Content form>
            <Form onSubmit={this.onSubmit}>
                <Form.Field name="name">
                    <label>Campaign Name</label><br/>
                    <Form.Input 
                    name="name"
                    onChange={this.changeHandler}/>
                </Form.Field>
                <Form.Field name="story">
                    <label>A rough story idea for the campaign</label><br/>
                    <Form.TextArea name="story"
                    onChange={this.changeHandler}
                    />

                </Form.Field>
                <Form.Field hidden="hidden" name="owner" value={this.props.currentUser._id}/>
                    
                
                
                <Button type='submit'>Submit</Button>
                
            </Form>
              
            </Modal.Content>
            </Modal>

    )}
}
export default withRouter(CreateCampaign)