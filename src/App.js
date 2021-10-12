import './App.css';

import React, { Route, Component, Router, routerProps, Switch } from 'react'
import home from './pages/home';
import signup from './pages/signup';
import signin from './pages/signin';
import todolist from './pages/todolist';
import { NavLink } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/signup'> SignUp </NavLink>
        <NavLink to='/signin'> SignIn </NavLink>
        <NavLink to='/TodoList'> ListPage </NavLink>
      <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <home {...routerProps} />} 
              />
              <Route 
                  path="/auth/signup" 
                  exact
                  render={(routerProps) => <signup {...routerProps} />} 
              />
              <Route 
                path="/auth/signin"
                exact
                render={(routerProps) => <signin {...routerProps} />} 
              />
                <Route 
                path="/api/TodoList" 
                exact
                render={(routerProps) => <todolist {...routerProps} />} 
                />
          </Switch>
      </Router>
  </div>
    )
  }
}
