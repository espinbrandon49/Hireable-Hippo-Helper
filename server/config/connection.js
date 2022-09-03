const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://admin:QmWFWuW09D9ah4UX@cluster0.lz50dx1.mongodb.net/hippodb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// mongoose.connect('mongodb://127.0.0.1:27017/Hireable-Hippo-Helper',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });

module.exports = mongoose.connection;
