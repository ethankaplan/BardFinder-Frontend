import React, { Component } from 'react';

import { Form, TextArea,Modal,Button } from 'semantic-ui-react'

class NewCharModal extends Component{



render(){
    return(
        <div>
            <Modal.Header>What's your character idea?</Modal.Header>
            <Modal.Content form>
            <Form onSubmit={this.props.onSubmit}>
                <Form.Field name="idea">
                    
                    <TextArea placeholder='Enter Your Idea' name="idea" onChange={this.props.changeHandler}/>
                </Form.Field>
                <Form.Field hidden="hidden" name="user" value={this.props.currentUser._id}/>
                    
                
                
                <Button type='submit'>Submit</Button>
                
            </Form>
              
            </Modal.Content>
            </div>

    )}
}
export default NewCharModal