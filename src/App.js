import React, { useEffect } from 'react';
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

import './normalize.css';
import { GlobalStyles } from './global.styles';

import { setCurrentUser } from './redux/user/user.action';

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
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
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
