import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome/Welcome'

class App extends Component {
  state = {
    currentUser: null
  };

  doSetCurrentUser = user => {
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
          <Route exact path={routes.USER} 
          render={this.state.currentUser ? 
            () =><UserProfile user={this.state.currentUser}/>:
            ()=><Welcome/>}/>
          } />
          <Route exact path={routes.LOGIN} render={()=><Login doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path={routes.REGISTER} render={() => <Register doSetCurrentUser={this.doSetCurrentUser} />} />{" "}
          <Route render={() => <div> NOT FOUND </div>} />
        </Switch>
          
            
          
        
      </div>
  )};
}

export default App;
