const { Users } = require('../../models'); 

const {
  generateAccessToken,
  sendAccessToken
} = require('../tokenFunctions');

module.exports = async (req, res) => {
  
  const userInfo = await Users.findOne({
        where: { email: req.body.email, password: req.body.password }
  });

  if(!userInfo) {
        res.status(401).send({ message: "Invalid user or Wrong password"})
  }

  const payload = userInfo.dataValues;
  delete payload.password;

  try {
    const accessToken = generateAccessToken(payload);
    sendAccessToken(res, accessToken);

  } catch (err) {
    console.log(err)
  }
}