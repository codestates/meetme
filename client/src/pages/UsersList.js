import React, { useEffect, useState } from 'react';
import { customAxios } from '../utils/cutomAxios';
import '../css/UserList.css';

import Nav from '../components/Nav';
import Landing from '../pages/Landing';
import PersonInfoCard from '../components/PersonInfoCard';
import PersonInfoModal from '../components/PersonInfoModal';

function UsersList({ handleLoading, isLoading}) {

  console.log("render start 랜더링");
  handleLoading(true);

  // 모든 사용자의 정보를 관리
  const [personList, setPersonList] = useState([])
    // 모든 유저리스트에서 20명의 데이터만 추출한다
  // 이 20명만 화면에 보이도록한다.
  const [ personInfo, setPersonInfo ] = useState({
    email: '',
    category: '',
    tag: '',
    profilepath: ''
  })

  const personInfoHandler = (person) => {
    setPersonInfo(person);
  }
  
  const [isOpen, setIsOpen] = useState(false);
  
  let openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  let slicedUsersList; // ? personList가 배열로써 관리되고 있는가?

  useEffect(async () => {

    await customAxios
    .get('/person/profile')
    .then(res => {
      // 인증이 되었다면
      // 받은 데이터를 personList에 넣어
      // personList의 상태를 변경하기 (로그아웃이 된다면 상태는 자동으로 공백이 되는 것일까?)
      const usersList = res.data.users; 
      setPersonList(usersList);
      handleLoading(false);
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
        <div>
          {slicedUsersList.map((person, idx) => {
          return (<PersonInfoCard
            key={idx}
            person={person}
            personInfoHandler={personInfoHandler}
            setIsOpen={setIsOpen}
            openModalHandler={openModalHandler}
          /> )})}
        </div>
        {isOpen ? (
          <PersonInfoModal
            person={personInfo}
            openModalHandler={openModalHandler}
          />
        ) : null}
      </section>
     )}
    </div>
  )
}

export default UsersList;