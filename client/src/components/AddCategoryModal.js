import React from 'react'
import '../css/AddCategoryModal.css'

function AddCategoryModal({ addCategoryModal, setAddCategoryModal }) {

  return (
    <>
      {addCategoryModal ?
      <section className='addCategoryModalSection'>
          <div className='addCategoryModalContainer'>
          <p className='addCategoryModalText'>관심사를 적어주세요.</p>
          <input type='text' placeholder='예시) 영화' className='addCategoryModalInput'></input>
          <button className='addCategoryModalBtn' onClick={ () => setAddCategoryModal(!addCategoryModal) }>추가</button>
        </div>
        </section> :
        null}
    </>
  )
}

export default AddCategoryModal