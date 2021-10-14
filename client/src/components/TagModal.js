import React from 'react'
import '../css/TagModal.css'

function TagModal({ showTagModal, setShowTagModal,category }) {

  return (
    <>
      {showTagModal ?
      <section className='tag-modal-section'>
          <div className='tag-modal-container'>
            {console.log(category)}
          <p className='tag-modal-text'>제일 좋아하는 {category} 을(를) 적어주세요.</p>
          <input type='text' placeholder='예시) 해리포터' className='tag-modal-input'></input>
          <button className='tag-modal-btn' onClick={ () => setShowTagModal(!showTagModal) }>입력</button>
        </div>
        </section> :
        null}
    </>
  )
}

export default TagModal