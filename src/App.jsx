import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ListingListPage from './pages/listing-list-page';
import ListingFormPage from './pages/listing-form-page';
import './styles/main.css';
import 'normalize.css';

class App extends Component {

  render() {
      
    return (

      <Container>

        <div className="ui two item menu">

          <NavLink
              className="item"
              activeClassName="active"
              exact to="/">
              Listings
          </NavLink>

          <NavLink
              className="item"
              activeClassName="active"
              exact to="/listings/new">
              Add Listing
          </NavLink>

        </div>

        <Route exact path="/"
               component={ListingListPage}/>

        <Route path="/listings/new"
               component={ListingFormPage}/>

        <Route path="/listings/edit/:_id"
               component={ListingFormPage}/>

      </Container>

    );
  }
}

export default App;
