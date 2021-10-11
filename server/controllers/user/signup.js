const { Users } = require('../../models');

// 1. 클라에서 입력된 정보가 모두 있는지 확인
// err
//     1-1. 모든 정보가 입력되지 않았을 경우
//     1-2. 이미 등록된 이메일이 있을 경우

// ok
// 입력받은 정보(이메일, 비밀번호)를 DB에 저장한다

module.exports = async (req, res) => {
  const { email, password } = req.body;
  
  if( !email || !password ) {
    res.status(422).send({ message: 'email or password is not entered' })
  }
  
  // DB에서 email 조회 후 동일한 email이 없으면,
  // 요청으로 받은 email과 password를 DB에 저장한다
  const [ user, created ] = await Users.findOrCreate({
    where: { email: email },
    defaults: {
        email,
        password
    }
  });

  // DB에 새롭게 데이터가 생성되지 않았다면 === 이미 있는 email이라면
  if(!created) {
    res.status(409).send({ message: 'Entered email already exists' })
  } 

  res.sendStatus(201);
}

