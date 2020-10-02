import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/Sing-In-Sign-Up/Sing-In-Sign-Up.component';
import CheckOutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import './normalize.css';

import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
<<<<<<< HEAD
  //new code without componentWillmount() & unsubscribeFromAuth
=======
  unsubscribeFromAuth = null;

<<<<<<< HEAD
  componentDidMount() {
=======
>>>>>>> 38cb01f339578bfa9e20d84845a23831d83b1785
  componentDidMount = () => {
>>>>>>> ccf1b9c86b039db7256a5d89e55297056a33e6f8
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  };
<<<<<<< HEAD

=======
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
<<<<<<< HEAD
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
=======
>>>>>>> ccf1b9c86b039db7256a5d89e55297056a33e6f8
>>>>>>> 38cb01f339578bfa9e20d84845a23831d83b1785
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
