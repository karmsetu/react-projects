import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('boi2')
  const [list, setList] = useState([{id:1, title:"boi"}])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(0)
  const [alert, setAlert] = useState({
    show:false,
    msg: '',
    type: ''
  })
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(!name){
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else  {
      // show alert
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...List, newItem])
      setName('')
    }

    console.log(e)
  }
  const clearItems =()=> {
    console.log(`yo`)
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=> {
            setName(e.target.value)
          }}/>
          <button type="submit" className='submit-btn'>
            {isEditing ? `edit` : `submit`}
          </button>
        </div>
      </form>
      <div className="grocer-container">
        <List items={list}/>
        <button className='clear-btn' onClick={clearItems}>clear items</button>
      </div>
    </section>
    )
}

export default App
