import React, { Component} from 'react';
import { connect } from 'react-redux';
import ListingList from '../components/listing-list';
import { fetchListings, deleteListing } from '../actions/listing-actions';

class ListingListPage extends Component {

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    return (
      <div>
        <h1 className="App-header">Listings</h1>

        <ListingList listings={this.props.listings} loading={this.props.loading} errors={this.props.errors} deleteListing={this.props.deleteListing}/>
      </div>
    )
  }
}

// Make listings  array available in  props
function mapStateToProps(state) {
  return {
      listings : state.listingStore.listings,
      loading: state.listingStore.loading,
      errors: state.listingStore.errors
  }
}

export default connect(mapStateToProps, {fetchListings, deleteListing})(ListingListPage);
