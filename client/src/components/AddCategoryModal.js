import React from 'react'
import '../css/AddCategoryModal.css'

function AddCategoryModal({ addCategoryModal, setAddCategoryModal }) {

  return (
    <>
      {addCategoryModal ?
      <section className='add-category-modal-section'>
          <div className='add-category-modal-container'>
          <p className='add-category-modal-text'>관심있는 항목을 추가해주세요.</p>
          <input type='text' placeholder='예시) 영화' className='add-category-modal-input'></input>
          <button className='add-category-modal-btn' onClick={ () => setAddCategoryModal(!addCategoryModal) }>추가</button>
        </div>
        </section> :
        null}
    </>
  )
}

export default AddCategoryModal