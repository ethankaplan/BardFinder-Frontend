import React, {Component} from 'react';
import './App.css';

import Campaigns from './component/ViewAllCamps/CampaignList'
import Welcome from './component/Welcome/Welcome'
import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import UserProfile from './component/UserProfile/UserProfile'

import { Switch, Route,withRouter,Redirect } from 'react-router-dom'
import * as routes from './constants/routes'

class App extends Component {
  state = {
    currentUser: null
  };

  doSetCurrentUser = user => {
    console.log("setcurrent")
    this.setState({
      currentUser: user
    });
  };
  clearCurrentUser=()=>{
    this.setState({
      currentUser:null
    })
  }
  render(){
    return (
      <div className="App">
        
        <NavBar
          currentUser={this.state.currentUser}
          doSetCurrentUser={this.doSetCurrentUser}
          clearCurrentUser={this.clearCurrentUser}
        
        />
        <Switch>
          <Route exact path={routes.HOME} render={() => <Welcome/>} />

          <Route exact path={routes.CAMP} render={() => <Campaigns/>} />
          <Route path={`${routes.CAMP}/view/:id`} render={() => <Campaigns/>} />

          <Route exact path={routes.USER} 
          render={this.state.currentUser ? 
            () =><UserProfile user={this.state.currentUser}/>:
            ()=><Welcome/>}/>
          <Route exact path={routes.LOGIN} render={()=><Login doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path={routes.REGISTER} render={() => <Register doSetCurrentUser={this.doSetCurrentUser} />} />{" "}
          <Route render={() => <div> NOT FOUND </div>} />
        </Switch>
          
            
          
        
      </div>
  )};
}

export default withRouter(App);
