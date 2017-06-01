import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

import '../styles/main.css';
import 'normalize.css';

export default function ListingCard({listing, deleteListing}) {

  return (
    <li tabIndex="0" className="App-listing-item-wrapper parent">

        <h3 className="listing-item-name">
           {listing.title}
        </h3>

        <a href={`${listing.url}`} target="_blank">
            <p className="listing-item-url">
            {listing.url}
            </p>
        </a>

        <Link className="font-awesome edit-listing"
              to={`/listings/edit/${listing._id}`}>
          <FontAwesome name='pencil' />
        </Link>

        <button tabIndex="0" className="font-awesome delete-listing"
            onClick={() => {

                deleteListing(listing._id);

                $('.delete-confirmation').removeClass('hide');

                setTimeout(function(){
                    $('.delete-confirmation').addClass('hide');
                }, 1000);
            }} >
            <FontAwesome name='trash-o'/>
        </button>
    </li>
  )
}

ListingCard.propTypes = {
  listing: React.PropTypes.object.isRequired
}
