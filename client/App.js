import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../client/components/Home';
import Navbar from '../client/components/Navbar';
import AllProducts from '../client/components/AllProducts';
import Footer from '../client/components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={AllProducts} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
