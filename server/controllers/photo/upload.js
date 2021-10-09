const databaseConnector = require('../../lib/databaseConnector');
const db = new databaseConnector();
db.init();

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email, filepath } = tokenData;

  // await db.user.update(
  //   {
  //     profile_image: filepath
  //   },
  //   {
  //     where: { email: email }
  //   }
  // );

  // const user = db.user.findOne({
  //   where: { email: email }
  // });

  res.status(200).json({
    email: '',
    filepath: ''
  });
};
