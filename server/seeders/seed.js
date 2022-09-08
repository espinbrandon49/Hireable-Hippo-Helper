const db = require('../config/connection');
const { User, Application } = require('../models');
const userSeeds = require('./userSeeds.json');
const applicationSeeds = require('./applicationSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Application.deleteMany({});
   
    await User.create(userSeeds);
  
    for (let i = 0; i < applicationSeeds.length; i++) {
      const { _id, applicant } = await Application.create(applicationSeeds[i]);

      const user = await User.findOneAndUpdate(
        { username: applicant },
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

  console.log('database seeded!');
  process.exit(0);
});