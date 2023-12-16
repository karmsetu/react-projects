import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const getLocalStorage =()=> {
    let list = localStorage.getItem('list')
    return list ? JSON.parse(list) : []
  }
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show:false,
    msg: '',
    type: ''
  })
  // useEffect(()=> {
  //   const show = setInterval(showAlert, 3000)
  //   return ()=> clearInterval(show)
  // },[])
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(!name){
      // display alert
      showAlert(true, "danger", "please enter value")
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map(item=> {
        if (item.id === editID) {
          return {...item, title:name}
        }
        return item
      }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', "value change")
    } else  {
      // show alert
      showAlert(true, 'success', "item added to the list")
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList(old => [...old, newItem])
      setName('')
    }
    
    console.log(e)
  }
  const showAlert =(show=false, type="", msg="")=> {
    setAlert({show, msg, type})
  }
  console.log({list})
  const clearItems =()=> {
    console.log(`yo`)
  }
  const clearList =()=> {
    showAlert(true, 'danger', "empty list")
    setList([])
  }
  const removeItem =(id)=> {
    showAlert(true, 'danger', "item remove")
    setList(list.filter(item => item.id !== id))
  }
  const editItem = (id)=> {
    const specificItem = list.find(item => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} 
                      removeAlert={showAlert}
                      list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" 
                className='grocery' 
                placeholder='e.g. eggs' 
                value={name} 
                onChange={(e)=> {
                  e.preventDefault()
                  setName(e.target.value)
                }}/>
          <button type="submit" className='submit-btn' onClick={handleSubmit}>
            {isEditing ? `edit` : `submit`}
          </button>
        </div>
      </form>
      {list.length >0 && 
        <div className="grocer-container">
          <List list={list} removeItem={removeItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearList} >clear items</button>
        </div>
      }
    </section>
    )
}

export default App
