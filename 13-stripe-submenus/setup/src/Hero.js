import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'
const Hero = () => {
  const {closeSubMenu} = useGlobalContext()
  // console.log(data)
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Lorem ipsum dolor, sit amet  odit.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae provident voluptas a impedit assumenda, ipsum architecto voluptates dolorum dignissimos quis aliquam laboriosam, delectus omnis ipsa accusantium officia consequuntur blanditiis velit!</p>
          <button className="btn">start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
