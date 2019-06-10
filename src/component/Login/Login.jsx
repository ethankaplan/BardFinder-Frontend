import React, {Component} from 'react'
import {Button,Form} from 'semantic-ui-react'
import * as routes from '../../constants/routes'
import {withRouter} from 'react-router-dom'


class Login extends Component{
    state={
        username:'',
        password:'',
        message:""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify({username:this.state.username,password:this.state.password}),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        

         const semiparsedResponse = await loginResponse.json();
        const parsedResponse=semiparsedResponse.user;

//fix to have checks in backend later
            if(parsedResponse.username&&parsedResponse.password===this.state.password){
              
                await this.props.doSetCurrentUser(parsedResponse)
                
                await this.setState({
                  logged: true,
                  message:""
                  
                })
                this.props.history.push(routes.HOME)
            } else {
              this.setState({
                message:"Incorrect information"
              })
            }
            
    }

    render(){
        return(
            <div>
                <h2>Login:</h2>
                <div>{this.state.message}</div>
                <Form onSubmit={this.onSubmit}>

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
export default withRouter(Login)