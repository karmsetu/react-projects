import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit =(e)=> {
    e.preventDefault()
    const amount = parseInt(count)
    if (amount > data.length) {
      setCount(data.length)
    }

    setText(data.slice(0,amount))
    console.log(`hello`)
  }
  
  const generatePara =()=> {
  }
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum</h3>
    <form className='lorem-form' onSubmit={handleSubmit} action="">
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>{
        e.preventDefault()
        setCount(e.target.value)
      }}/>
      <button type="submit" className='btn' onClick={generatePara}> generate </button>
    </form>
    <article className="lorem-text">
      {
        text.map((para, index)=> <p key={index}>{para}</p>)
      }
    </article>
  </section>
    )
}

export default App;
