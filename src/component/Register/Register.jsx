import React, {Component} from 'react'
import {Button,Form} from 'semantic-ui-react'
import * as routes from '../../constants/routes'
import {withRouter} from 'react-router-dom'

class Register extends Component{
    state={
        username:'',
        password:'',
        email:'',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onRegister = async (e) => {
        e.preventDefault();
        
        const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username:this.state.username,
                                  email:this.state.email,
                                  password:this.state.password,
                                 }),
            headers:{
                "Content-type" : 'application/json'
            }
            
        })
    
        const parsedResponse = await registerResponse.json();
        console.log(parsedResponse)
        if(parsedResponse.username) {
          this.props.doSetCurrentUser(parsedResponse)
            this.setState({
                logged: true,
            })
        }
        this.props.history.push(routes.HOME)
    }
    


    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <h2>Register:</h2>
                <Form onSubmit={this.onRegister}>
            <Form.Input icon='mail' 
                            iconPosition='right' 
                            label='Email' 
                            name='email' 
                            type='Email' 
                            placeholder='Email'
                            value={this.state.NewEmail}   
                            onChange={this.changeHandler}/>

                <Form.Input icon='user' 
                            iconPosition='right' 
                            label='Username' 
                            name='username' 
                            value={this.state.NewUsername} 
                             
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='right' 
                            label='Password' 
                            name='password' 
                            value={this.state.NewPassword} 
                            type='password'   
                            onChange={this.changeHandler}/>

                

               
                <Button content='Register' primary />
                </Form>
            </div>
        )
    }
}
export default withRouter(Register)