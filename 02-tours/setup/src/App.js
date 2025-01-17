import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log({tours})
      return tours      
    } catch (error) {
      setLoading(false)
      throw new console.error({error})
    }
  }
  useEffect(()=>{
    fetchTours()
  }, [])
  const removeTours =(id)=>{
    const newTours = tours.filter(eachTour => eachTour.id !== id)
    setTours(newTours)
  }
  // fetchTours()
  return loading ? <main><Loading/></main> : 
  <main> <Tours tours={tours} removeTours={removeTours} anyTour={tours.length} fetchTours={fetchTours}/></main>
}

export default App
