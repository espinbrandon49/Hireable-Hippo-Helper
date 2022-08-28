const db = require('../config/connection');
const { User, Application } = require('../models');
const userSeeds = require('./userSeeds.json');
const applicationSeeds = require('./applicationSeeds.json');

db.once('open', async () => {
  try {
    await Application.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < applicationSeeds.length; i++) {
      const { _id, applicationAuthor } = await Application.create(applicationSeeds[i]);
      const user = await User.findOneAndUpdate(
        {
          $addToSet: {
            applications: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});