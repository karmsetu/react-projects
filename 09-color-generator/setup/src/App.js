import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] =useState(`#4CB9E7`)
  const [error, setError] =useState(false)
  const [ list, setList] = useState(new Values('#4CB9E7').all(10))
  const handleSubmit =(e)=> {
    e.preventDefault()
    try {
      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
      
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form  onSubmit={handleSubmit}>
          <input type="text" name="color" id="color" placeholder='#4CB9E7' onChange={(e)=> {
            setColor(e.target.value)
          }} value={color}
          className={`${error? `error` : null}`}/>
          <button type="submit" className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {
          list.map((color,index) => {
            return <SingleColor key={index} {...color} index={index}/>
          })
        }
      </section>
    </>
    )
}

export default App
