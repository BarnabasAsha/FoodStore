import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layout/layout'
import Home from './pages/home'
import './App.css';
import Market from './pages/market';
import Groceries from './pages/groceries';
import Farm from './pages/farm';
import ProductDetails from './pages/productDetails';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Admin from './pages/admin'

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Layout>
                  <Home />
                </Layout>
              );
            }}
          />
          <Route
            exact
            path="/groceries"
            render={() => {
              return (
                <Layout>
                  <Groceries />
                </Layout>
              );
            }}
          />
          <Route
            exact
            path="/market"
            render={() => {
              return (
                <Layout>
                  <Market />
                </Layout>
              );
            }}
          />
          <Route
            exact
            path="/product/:id"
            render={() => {
              return (
                <Layout>
                  <ProductDetails />
                </Layout>
              );
            }}
          />
          <Route
            exact
            path="/farm"
            render={() => {
              return (
                <Layout>
                  <Farm />
                </Layout>
              );
            }}
          />
          <Route
            exact
            path="/admin"
            render={() => {
              return (
                <Layout>
                  <Admin />
                </Layout>
              );
            }}
          />
          <Route
            path="/login"
            component={Signin}
          />
          <Route
            path="/signup"
            component={Signup}
          />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
