import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../client/components/Home';
import Navbar from '../client/components/Navbar';
import AllProducts from '../client/components/AllProducts';
import SingleProduct from '../client/components/SingleProduct';
import Footer from '../client/components/Footer';
import AllProducts from './components/AllProducts';
import Cart from '../client/components/Cart';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
