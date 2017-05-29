// Initializes the `listing` service on path `/listings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/listing.model');
const hooks = require('./listing.hooks');
const filters = require('./listing.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'listing',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/listings', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('listings');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
