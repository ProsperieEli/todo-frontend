import './App.css';

import React, { Component} from 'react'
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import Todolist from './pages/Todolist.js';
import {
  NavLink,
BrowserRouter as Router,
Route,
Switch,
Redirect} from 'react-router-dom';

const TOKEN_KEY = 'TOKEN';
export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN_KEY)
  }

  handleTokenChange = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token})
  }

  render() {
    return (
      <div>
      <Router>
        <header>
        <NavLink exact activeClassName="active" to='/'>Home </NavLink>
        <NavLink exact activeClassName="active" to='/signup'> SignUp </NavLink>
        <NavLink exact activeClassName="active" to='/signin'> SignIn </NavLink>
        <NavLink exact activeClassName="active" to='/TodoList'> ListPage </NavLink>
        </header>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <Home {...routerProps} />} 
              />
              <Route 
                  path="/signup" 
                  exact
                  render={(routerProps) => <Signup 
                    handleTokenChange={this.handleTokenChange}
                    {...routerProps} />} 
              />
              <Route 
                path="/signin"
                exact
                render={(routerProps) => <Signin 
                  handleTokenChange={this.handleTokenChange}{...routerProps} />} 
              />
                <Route 
                path="/TodoList" 
                exact
                render={(routerProps) => this.state.token ? <Todolist 
                  token={this.state.token} {...routerProps}/>
                  : <Redirect to="/signup" /> 
                }
                />
          </Switch>
      </Router>
  </div>
    )
  }
}
