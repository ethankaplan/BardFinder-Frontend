import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component{
    state={
        
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
     
    logout=async()=>{
        console.log("logout")
        const logoutResponse = await fetch(`http://localhost:bard/users/logout`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify({}),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        this.props.clearCurrentUser()
    }
    
    
    render(){
        const { activeItem } = this.state
        return(
<Menu>
        <NavLink exact activeClassName="selected" to={routes.HOME}>
            <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            >
          Home
        </Menu.Item></NavLink>
        {this.props.currentUser ?
        <NavLink to={routes.USER} activeClassName="selected">
            <Menu.Item name='User' active={activeItem === 'User'} onClick={this.handleItemClick}>
            My Account
        </Menu.Item></NavLink>
        :null}

        <NavLink to={routes.CAMP} activeClassName="selected">
            <Menu.Item
            name='Campaigns'
            active={activeItem === 'Campaigns'}
            onClick={this.handleItemClick}
            >
            Campaigns
            </Menu.Item></NavLink>

            {
            this.props.currentUser?
                <Menu.Item
                position='right'
                name='Logout'
                onClick={this.logout}
                >LOGOUT</Menu.Item>:
                <span><NavLink to={routes.LOGIN} activeClassName="selected"><Menu.Item
                    position='right'
                    name='Login'
                    onClick={this.handleItemClick}
                >Login</Menu.Item></NavLink>
                <NavLink to={routes.REGISTER} activeClassName="selected"><Menu.Item
                    position='right'
                    name='REGISTER'
                    onClick={this.handleItemClick}
                >Register</Menu.Item></NavLink></span>
            }

      </Menu>

        )
    }


}
export default NavBar