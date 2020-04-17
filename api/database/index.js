const mongoose = require('mongoose');

const mongoConnection = mongoose.connect(
  'mongodb://localhost:27017',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

module.exports = mongoConnection;
