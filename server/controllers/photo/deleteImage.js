const db = require('../../../models');

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email } = tokenData;

  await db.user.update(
    {
      profile_image: null,
    },
    {
      where: { email: email }
    }
  );

  const user = db.user.findOne({
    where: { email: email }
  });

  res.status(200).json({
    email: user.email,
    filepath: user.profile_image,
    message: 'photo has been deleted'
  });
};
