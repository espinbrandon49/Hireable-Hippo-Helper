const db = require('../config/connection');
const { User, Application, Milestone } = require('../models');
const userSeeds = require('./userSeeds.json');
const applicationSeeds = require('./applicationSeeds.json');
const milestoneSeeds = require('./milestoneSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Application.deleteMany({});
    await Milestone.deleteMany({});

    await User.create(userSeeds);
    await Application.create(applicationSeeds);
    await Milestone.create(milestoneSeeds);

    for (let i = 0; i < applicationSeeds.length; i++) {
      const { _id, applicant } = await Application.create(applicationSeeds[i]);
      const user = await User.findOneAndUpdate(
        {username: applicant},
        {
          $addToSet: {
            applications: _id,
          },
        }
      );
    }

    // for (let i = 0; i < milestoneSeeds.length; i++) {
    //   const { _id } = await Milestone.create(milestoneSeeds[i]);
    //   const application = await Application.findOneAndUpdate(
    //     {
    //       $addToSet: {
    //         milestones: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('database seeded!');
  process.exit(0);
});