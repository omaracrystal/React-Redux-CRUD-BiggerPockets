import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = {
      message: 'Please provide a title for your listing url'
    }
  }
  if(!values.url) {
    errors.url = {
      message: 'Please provide a valid url'
    }
  }
  // else if(!/^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(values.url)) {
  //   errors.url = {
  //     message: 'Invalid Url'
  //   }
  // }
  return errors;
}

class ListingForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Listing Asynchronously
    const { listing } = nextProps;
    if(listing._id !== this.props.listing._id) { // Initialize form only once
      this.props.initialize(listing)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, listing } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{listing._id ? 'Edit Listing' : 'Add New Listing'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="title" type="text" component={this.renderField} label="Title"/>
              <Field name="url" type="text" component={this.renderField} label="Url"/>
            </Form.Group>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'listing', validate})(ListingForm);
