import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newListing, saveListing, fetchListing, updateListing } from '../actions/listing-actions';
import ListingForm from '../components/listing-form';


class ListingFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {

    window.scrollTo(0,0);

    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchListing(_id)
    } else {
      this.props.newListing();
    }
  }

  submit = (listing) => {
    if(!listing._id) {
      return this.props.saveListing(listing)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateListing(listing)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ListingForm listing={this.props.listing} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listing: state.listingStore.listing,
    errors: state.listingStore.errors
  }
}

export default connect(mapStateToProps, {newListing, saveListing, fetchListing, updateListing})(ListingFormPage);
