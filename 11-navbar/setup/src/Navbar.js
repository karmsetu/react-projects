import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [linkData, setLinkData] = useState(links)
  const [socialData, setSocialData] = useState(social)
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  }, [showLinks])

  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className='nav-toggle' onClick={()=> setShowLinks(old => !old)}>
          <FaBars/>
        </button>
      </div>
      
      <div className={`links-container`} ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {
            linkData.map(item => {
              const {id, url, text} = item
              return <li key={id}> <a href={url}>{text}</a> </li>
          })
          }
        </ul>
      </div>
      
      <ul className="social-icons">
        {
          socialData.map(item => {
            const {id, url, icon} = item
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })
        }
        
      </ul>
    </div>
    )
}

export default Navbar
