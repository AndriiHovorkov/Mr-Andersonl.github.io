import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Album from '../album/Album';
import Contacts from '../contacts/Contacts';
import FormInput from '../form/FormInput';
import Home from '../home/Home';
import PhotoNavigation from '../photo/PhotoNavigation';
/* import Photo from '../photo/Photo'; */

export default function Navigation () {


        return (
            <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/Contacts">Control User</Link>
                  </li>
                  <li>
                    <Link to="/Album">Album</Link>
                  </li>
                </ul>
              </nav>
      
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/FormInput">
                  <FormInput/>
                </Route>
                <Route path="/Contacts">
                  <Contacts />
                </Route>
                <Route path="/Album">
                  <Album />
                </Route>
                <Route path="/PhotoNavigation">
                  <PhotoNavigation/>
                </Route>
                
                
              </Switch>
            </div>
          </Router>
        );
}
