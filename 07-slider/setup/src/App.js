import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  useEffect(()=> {
    const lInd = people.length-1
    setIndex(index < 0 ? lInd : index > lInd ? 0 : index)
  },[people, index])

  useEffect(()=> {
    const sliderVal = setInterval(()=> {
      setIndex(index+1)
    },3500)
    return ()=> clearInterval(sliderVal)
  },[index])
  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {
          people.map((person,personIndex)=> {
            const {id, image, name, title, quote} = person
            // let position = 'nextSlide'
            let position = personIndex === index ? `activeSlide` : personIndex === index-1 || (index === 0 && personIndex === people.length-1) ? `lastSlide` : `nextSlide` 
            return (
              <article className={position} key={id}>
                <img src={image} alt={title} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight/>
              </article>
            )
          })
        }
        <button className='prev' onClick={()=> setIndex(index-1)}><FiChevronLeft/></button>
        <button className='next' onClick={()=> setIndex(index+1)}><FiChevronRight/></button>
      </div>
    </section>
  );
}

export default App;
