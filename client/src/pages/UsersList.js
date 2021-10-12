import React, { useEffect, useState } from 'react';
import { customAxios } from '../utils/cutomAxios';
import '../css/UserList.css';

import Nav from '../components/Nav';
import Landing from '../pages/Landing';
import PersonInfoCard from '../components/PersonInfoCard';

function UsersList({ handleLoading, isLoading}) {

  handleLoading(true);

  // 모든 사용자의 정보를 관리
  const [personList, setPersonList] = useState([])

  // 사용자 수를 제한하여 리스트를 담을 변수
  let slicedUsersList;

  // 서버에 axios요청을 하여, 모든 사용자 목록을 불러온다.
  useEffect(async () => {

    await customAxios
    .get('/person/profile')
    .then(res => {
      // (인증이 되었다면)
      // 받은 데이터를 personList에 넣는다.
      const usersList = res.data.users;

      setPersonList(usersList);
      handleLoading(false);

      // 결과값 중 20명만 축출한다.
      slicedUsersList= personList.slice(0, 20); 
    })
    .catch(err => {
      console.log('에러가 발생한 이유: ' + err)
      alert('에러가 발생하여, 회원 리스트를 가져오는데 실패하였습니다.')
    });

  }, []);
  


  return (
    <div>
      {isLoading ? (
      <Landing />
      ) : (
      <section class='pserson-list-container'>
        <Nav />
        <div>{slicedUsersList.map((person) => <PersonInfoCard person={person}/> )}</div>
      </section>
     )}
    </div>
  )
}

export default UsersList;