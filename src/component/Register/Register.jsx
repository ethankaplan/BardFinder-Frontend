import React, {Component} from 'react'
import {Button,Form} from 'semantic-ui-react'

class Register extends Component{
    state={
        NewUsername:'',
        NewPassword:'',
        ConfirmNewPassword:'',
        NewEmail:'',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render(){
        return(
            <div>
                <h2>Register:</h2>
                <Form onSubmit={this.onRegister}>
            <Form.Input icon='mail' 
                            iconPosition='right' 
                            label='Email' 
                            name='NewEmail' 
                            type='Email' 
                            placeholder='Email'
                            value={this.state.NewEmail}   
                            onChange={this.changeHandler}/>

                <Form.Input icon='user' 
                            iconPosition='right' 
                            label='Username' 
                            name='NewUsername' 
                            value={this.state.NewUsername} 
                             
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='right' 
                            label='Password' 
                            name='NewPassword' 
                            value={this.state.NewPassword} 
                            type='password'   
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='right' 
                            label='Confirm Password' 
                            name='ConfirmNewPassword' 
                            value={this.state.ConfirmNewPassword} 
                            type='password'   
                            onChange={this.changeHandler}/>

               
                <Button content='Register' primary />
                </Form>
            </div>
        )
    }
}
export default Register