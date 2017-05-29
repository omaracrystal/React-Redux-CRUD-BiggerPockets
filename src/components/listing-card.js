import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ListingCard({listing, deleteListing}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
           {listing.title}
        </Card.Header>
        <Card.Description>
          <p> {listing.url} </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/listings/edit/${listing._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteListing(listing._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ListingCard.propTypes = {
  listing: React.PropTypes.object.isRequired
}
