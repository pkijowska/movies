import React from 'react';
import Nav from './Nav';
import Movies from './Movies';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Customers from './customers';
import Rentals from './rentals';
import NotFound from './notFound';
import MovieForm from './movieForm';
import LoginForm from './loginForm';






const  Routes = (
  <Router>
  <Nav/>
  <Switch>
<Route path="/login" component= { LoginForm } />
<Route path="/movies/:id" component= { MovieForm } />
<Route path="/movies" component= { Movies } />
<Route path="/customers" component= { Customers } />
<Route path="/rentals" component= { Rentals } />
<Route path="/not-found" component= { NotFound } />
<Redirect exact from="/" to="/movies" />

</Switch>
  </Router>
);




export default Routes;
