import React from 'react'
import '../css/TagModal.css'

function TagModal({ showTagModal, setShowTagModal,category }) {

  return (
    <>
      {showTagModal ?
      <section className='tagModalSection'>
          <div className='tagModalContainer'>
            {console.log(category)}
          <p className='tagModalText'>제일 좋아하는 {category} 을(를) 적어주세요.</p>
          <input type='text' placeholder='예시) 해리포터' className='tagModalInput'></input>
          <button className='tagModalBtn' onClick={ () => setShowTagModal(!showTagModal) }>입력</button>
        </div>
        </section> :
        null}
    </>
  )
}

export default TagModal