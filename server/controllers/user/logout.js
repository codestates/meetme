const { isAuthorized } = require('../tokenFunctions')

module.exports = (req, res) => {
  // 유효한 토큰이면 로그아웃 성공
  // 유효한 토근이 아니면 로그아웃 실패
  const isAccessTokenData = isAuthorized(req);

  if(!isAccessTokenData) {
    res.status(400).send({ message: 'you\'re currently not logined.' })
  }

  res.status(205).send({ message: 'successfully signed out!'})
}