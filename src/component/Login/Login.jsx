import React, {Component} from 'react'
import {Button,Form} from 'semantic-ui-react'

class Login extends Component{
    state={
        username:'',
        password:''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers:{
                "Content-type" : 'application/json'
            }
        })}

    render(){
        return(
            <div>
                <h2>Login:</h2>
                <Form>
                   
                        <Form.Input   
                                label='Username' 
                                name='username' 
                                value={this.state.username} 
                                placeholder='username' 
                                type="text"
                                onChange={this.changeHandler}/>
                        <Form.Input 
                                icon='lock' 
                                iconPosition='right' 
                                label='Password' 
                                name='password' 
                                value={this.state.password} 
                                type='password' 
                                onChange={this.changeHandler}/>
                   
                        <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Login