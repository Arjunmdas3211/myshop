import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import { Switch , Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/Sing-In-Sign-Up/Sing-In-Sign-Up.component';


import {auth } from "./firebase/firebase.utils"; 

import './App.css';
class  App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser:user});

    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }
   render(){
    return (
    
      <div>
      <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
