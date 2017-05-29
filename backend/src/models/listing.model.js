//require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const listing = new mongooseClient.Schema({
    title: {
      type: String,
      required: [true, 'Please give your url a Name']
    },
    url: {
      //type: mongooseClient.SchemaTypes.Email,
      type: String,
      required: [true, 'Url link is required']
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('listing', listing);
};
