import React from 'react';

const List = (props) => {
  const people = props.people.map(person => {
    const {id, name, image, age} = person
    return (
      <article key={id} className='person'>
        <img src={image} alt='lol'/>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    )
  })
  return (
    <>
      {people}
    </>
  );
};

export default List;
