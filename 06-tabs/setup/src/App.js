import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  useEffect(()=> {
    fetchFunc()
    console.log(jobs)
  }, [])
  const fetchFunc = async()=> {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }
  if (loading) {
    return <section className='section loading'>
      <h1>loading...</h1>
    </section>
  }
  const {company, dates, duties, id, order, title} = jobs[value]
  return <section className='section'>
    <div className='title'>
      <h2>experience</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
      <div className="btn-container">
        {
          jobs.map((item, index)=> {
            return <button key={item.id} onClick={()=> setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
          })
        }
      </div>
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {
        duties.map((elem,id) => <div className='job-desc' key={id}><FaAngleDoubleRight className='job-icon'/> <p>{elem}</p> </div>)
      }
    </article>
    </div>
  </section>
}

export default App








