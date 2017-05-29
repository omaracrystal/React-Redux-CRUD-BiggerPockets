import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../styles/main.css';
import 'normalize.css';

export default function ListingCard({listing, deleteListing}) {
  return (
    <li className="App-listing-item-wrapper">

        <h3 className="listing-item-name">
           {listing.title}
        </h3>

        <p className="listing-item-url">
          {listing.url}
        </p>

        <Link className="font-awesome edit-listing"
              to={`/listings/edit/${listing._id}`}>
          <FontAwesome name='pencil' />
        </Link>

        <button className="font-awesome delete-listing"
            onClick={() =>
            deleteListing(listing._id)} >
            <FontAwesome name='trash-o'/>
        </button>

    </li>
  )
}

ListingCard.propTypes = {
  listing: React.PropTypes.object.isRequired
}
