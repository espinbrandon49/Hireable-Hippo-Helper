const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/Hireable-Hippo-Helper',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//BEFORE HEROKU DEPLOY
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Hireable-Hippo-Helper',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// mongoose.connect('mongodb://127.0.0.1:27017/Hireable-Hippo-Helper',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });

module.exports = mongoose.connection;
