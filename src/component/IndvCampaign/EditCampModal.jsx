import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CharacterItem from './CharacterItem'
import { Form, TextArea,Modal,Button } from 'semantic-ui-react'

class EditCampModal extends Component{



render(){
    
    return(
        
        <Modal trigger={<Button>Edit Story</Button>}>
            <Modal.Header>Edit story</Modal.Header>
            <Modal.Content form>
            <Form onSubmit={this.props.editStory}>
                <Form.Field name="Stroy">
                    
                    <TextArea placeholder='Edit Your Story' name="Story" onChange={this.props.changeHandler} value={this.props.story}/>
                </Form.Field>
                
                    
                
                
                <Button type='submit'>Submit</Button>
                
            </Form>
              
            </Modal.Content>
        </Modal>
            

    )}
}
export default EditCampModal