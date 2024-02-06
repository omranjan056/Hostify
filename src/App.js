import React from "react";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/Cart";
import Footer from './components/Footer';
import Search from "./components/Search";
import AddHostel from "./components/AddHostel";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Offer from "./components/Offer";
import Details from "./components/Details";
import Owner from "./components/Owner";
import Register from "./components/Register";


function App() {
  return (
      <Router>
        <div className="app" style={{width: '100vw'}}>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path='/addHostel'>
                <AddHostel />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/offer'>
                <Offer/>
              </Route>
              <Route exact path='/search'>
                <Search/>
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route exact path = '/Login'>
                <Login/>
              </Route>
              <Route exact path='/SignUp'>
                <SignUp/>
              </Route>
              <Route exact path='/house/:id'>
                <Details/>
              </Route> 
              <Route exact path = '/house/Owner/:id'>
                <Owner />
              </Route>
              <Route exact path = '/addHostel/register'>
                <Register/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
