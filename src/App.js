import React, { Component } from 'react';
import WelcomeView from './views/welcome/WelcomeView';
import AddProduct from './views/products/AddProduct';
import LoginPage from './views/users/LoginPage';
import SignUpPage from './views/users/SignUpPage';
import {BrowserRouter, Redirect,Route,Switch} from "react-router-dom";
import '../src/assets/styles/App.css';
import '../src/assets/styles/scss/responsiveness.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomeView}/>
            <Route path="/add" component={AddProduct}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
