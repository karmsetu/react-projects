import React from 'react';

const Categories = ({filterItems, catSend}) => {
  const elem = []
  catSend.forEach(element => {
    const single = <button className='filter-btn' onClick={()=> filterItems(element)} key={element}>{element}</button>
    elem.push(single)
  });
  
  return (
    <div className='btn-container'>
      {elem}
    </div>
    );
};

export default Categories;
