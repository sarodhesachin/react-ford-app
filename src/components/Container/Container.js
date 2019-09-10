import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './Dashboard/Dashboard'
import CarDetails from './CarDetails/CarDetails'
import Admin from './Admin/Admin'
import './Container.css'

class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/details" component={CarDetails} />
         <Route exact path="/admin" component={Admin} />
        </Router>
      </div>
    )
  }
}

export default Container;