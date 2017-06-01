import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ListingCard from './listing-card';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

export default function ListingList({listings, loading, errors, deleteListing}){

  const loadingMessage = (
      <Message icon info>
        <FontAwesome name='spinner' />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>
               No Listings Found
           </Message.Header>
           <p>Add some new listings to get started.</p>
           <Link to={'/listings/new'}
                 className="primary-button"
                 onClick={() => {$('input').focus();}}>
               Add New Listing
           </Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return listings.map(listing => {
      return (
        <ListingCard key={listing._id} listing={listing} deleteListing={deleteListing} />
      )
    })
  }

  const listingList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { listings.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { listings.length > 0 && listingList }
        <div className="modal delete-confirmation hide">
            Successfully deleted!
        </div>
    </div>
  )
}
