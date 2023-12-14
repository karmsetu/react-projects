import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import App from './App';

const Review = () => {
  const [index, setIndex] = useState(1)
  const {id, name, job, image, text} = people[index]
  const prevPerson = () => {
    setIndex(currInd => currInd ===0? people.length-1: currInd-1)

  }
  const nextPerson = () => {
    setIndex(currInd => currInd === people.length-1? 0: currInd+1)
  }
  const randPerson =()=> {
    setIndex(currInd => {
      const randNum = Math.floor(Math.random() * people.length)
      return currInd === randNum ? randNum === people.length-1 ? randNum-1 : randNum+1 : randNum 
    } )
    console.log(index)
  }
  return (
    <article className='review'>
      <div className='img-container'> 
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'><FaChevronLeft  onClick={prevPerson} /></button>
        <button className='next-btn'><FaChevronRight onClick={nextPerson} /></button>
      </div>
      <button className='random-btn' onClick={randPerson}>surprise me</button>
    </article>
    )
};

export default Review;
