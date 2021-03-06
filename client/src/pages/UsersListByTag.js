import React, { useEffect } from 'react';
import { customAxios } from '../utils/cutomAxios';
import '../css/UserList.css';

import Nav from '../components/Nav';
import Loading from '../components/Loading';
import PersonInfoCard from '../components/PersonInfoCard';

function UserListByTag({ tagName, handleLoading, isLoading}) {
    
    handleLoading(true);

    const [personListByTag, setPersonListByTag] = useState([]);
    
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
    // 사용자 수를 제한하여 리스트를 담을 변수
    let slicedUsersList; 

    // 서버에 axios요청을 하여, 동일한 tagName을 가진 사용자 목록을 불러온다.
    useEffect(async () => {

    await customAxios
    .get(`/person/profile/${tagName}`)
    .then(res => {
      
      const personList = res.data.users;

      handleLoading(false); 
      setPersonListByTag(personList);

      // 20명의 데이터만 축출한다
      slicedUsersList = personListByTag.slice(0, 20); 
    })
    .catch(err => {
        console.log('에러가 발생한 이유: ' + err)
        alert('에러가 발생하여, 동일한 태그 회원 리스트를 가져오는데 실패하였습니다.')
    });

  }, [])
  
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

export default UserListByTag;