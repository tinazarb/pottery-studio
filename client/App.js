import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../client/components/Home';
import Navbar from '../client/components/Navbar';
import Footer from '../client/components/Footer';
import AllProducts from '../client/components/AllProducts';
import Login from '../client/components/Login';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={AllProducts} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
