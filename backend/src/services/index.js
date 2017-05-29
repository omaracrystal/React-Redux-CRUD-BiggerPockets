const listing = require('./listing/listing.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(listing);
};