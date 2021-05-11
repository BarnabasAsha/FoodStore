import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './actions/user'
import { Switch, Route, Redirect } from 'react-router-dom'
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
import { auth, handleUserProfile } from './firebase/utils'
import useQuery from './customHooks/useQuery'

function App() {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user)

  const query = useQuery()
  const id = query.get('product')
  

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot((snapshot) => {
          dispatch(userAction.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }, err => console.log(err.message)))
        })
      }
      dispatch(userAction.setCurrentUser(userAuth))
    })

    return () => {
      authListener()
    }
  }, [dispatch])

  return (
    <div className="App">
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
          render={() => currentUser && currentUser.userRoles.include('admin') ? (
                <Layout>
                  <Admin />
                </Layout>
          ): <Redirect to="/"/> }
        />
        <Route
          path="/login"
          render={() => currentUser ? <Redirect to="/"/> : <Signin />}
        />

        <Route
          path="/signup"
          render={() => currentUser ? <Redirect to="/"/> : <Signup />
          }
        />
      </Switch>
      {
        
        id ? <ProductDetails /> : null
      }
    </div>
  );
}

export default App;
