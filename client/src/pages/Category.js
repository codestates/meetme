import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Category.css'
import TagModal from '../components/TagModal'
import AddCategoryModal from '../components/AddCategoryModal';

function Category() {
  const [showTagModal, setShowTagModal] = useState(false)
  const TagModalHandler = () => {
    setShowTagModal(!showTagModal)
  }
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const addCategoryModalHandler = () => {
    setAddCategoryModal(!addCategoryModal)
  }
  const categories = ['음악', '운동', '책', '드라마', '아이스크림', '영화', '만화 캐릭터']
  return (
    <section className='category-section'>
      <div className='category-container'>
        <div className='category-txt'>관심있는 항목을 선택해주세요.</div>
        <div className='category-tags'>
          {categories.map((category,idx) =>
            <span className='category-key' key={idx}>
              <button className='category-tag' onClick={TagModalHandler}>{category}</button>
              <TagModal showTagModal={showTagModal} setShowTagModal={setShowTagModal} category={category}/>
            </span>
          )}
        </div>
        <div className='category-buttons'>
          <button className='category-plus-btn' onClick={addCategoryModalHandler}>+</button>
          <AddCategoryModal addCategoryModal={addCategoryModal} setAddCategoryModal={setAddCategoryModal}/>
          <Link to='/person'><button className='category-submit-btn'>입력완료</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Category