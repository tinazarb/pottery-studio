import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../client/components/Home';
import AboutUs from '../client/components/AboutUs';
import Navbar from '../client/components/Navbar';
import AllProducts from '../client/components/AllProducts';
import SingleProduct from '../client/components/SingleProduct';
import Footer from '../client/components/Footer';
import Login from '../client/components/Login';
import Cart from '../client/components/Cart';
import CreateAccount from './components/CreateAccount';
import Checkout from './components/Checkout';

import { autoLogin } from './store/auth';

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoLogin(token);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/shop" component={AllProducts} />
              <Route exact path="/products/:id" component={SingleProduct} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={CreateAccount} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => ({ auth: state.auth });
const mapDispatch = (dispatch) => {
  return {
    autoLogin: (token) => dispatch(autoLogin(token)),
  };
};

export default connect(mapState, mapDispatch)(App);
