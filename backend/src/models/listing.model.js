// listing-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

// require('mongoose-type-email');
//
// module.exports = function (app) {
//   const mongooseClient = app.get('mongooseClient');
//   const listing = new mongooseClient.Schema({
//     name : {
//       first: {
//         type: String,
//         required: [true, 'First Name is required']
//       },
//       last: {
//         type: String,
//         required: false
//       }
//     },
//     email : {
//       type: mongooseClient.SchemaTypes.Email,
//       required: [true, 'Email is required']
//     },
//     phone : {
//       type: String,
//       required: [true, 'Phone is required'],
//       validate: {
//         validator: function(v) {
//           return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v);
//         },
//         message: '{VALUE} is not a valid international phone number!'
//       }
//     },
//     createdAt: { type: Date, 'default': Date.now },
//     updatedAt: { type: Date, 'default': Date.now }
//   });
//
//   return mongooseClient.model('listing', listing);
// };

// {
//   "id": "55b070ff-8a25-4fb8-9a8d-1617bbd8b788",
//     "type": "listings",
//     "attributes": {
//   "title": "Sweet listing",
//       "url": "http://google.com"
// }
// },
// {
//   "id": "71b3b643-c9b5-4761-aa74-69057ccf1591",
//     "type": "listings",
//     "attributes": {
//   "title": "Sweet listing",
//       "url": "http://google.com"
// }
// }

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const listing = new mongooseClient.Schema({
    title: {
      type: String,
      required: false
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