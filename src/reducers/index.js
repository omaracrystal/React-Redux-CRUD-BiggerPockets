import { combineReducers } from 'redux';
import ListingReducer from './listing-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  listingStore: ListingReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
