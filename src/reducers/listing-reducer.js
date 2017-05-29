const defaultState = {
  listings: [],
  listing: {name:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_LISTINGS_FULFILLED': {
      return {
        ...state,
        listings: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_LISTINGS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_LISTINGS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_LISTING': {
      return {
        ...state,
        listing: {}
      }
    }

    case 'SAVE_LISTING_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_LISTING_FULFILLED': {
      return {
        ...state,
        listings: [...state.listings, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_LISTING_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { title, url } = data.errors;
      const errors = { global: data.message, title, url };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_LISTING_PENDING': {
      return {
        ...state,
        loading: true,
        listing: {}
      }
    }

    case 'FETCH_LISTING_FULFILLED': {
      return {
        ...state,
        listing: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_LISTING_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_LISTING_FULFILLED': {
      const listing = action.payload.data;
      return {
        ...state,
        listings: state.listings.map(item => item._id === listing._id ? listing : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_LISTING_REJECTED': {
      const data = action.payload.response.data;
      const { title, url } = data.errors;
      const errors = { global: data.message, title, url };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_LISTING_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        listings: state.listings.filter(item => item._id !== _id)
      }
    }

    default:
      return state;
  }
}
