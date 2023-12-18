import React, { useState, useRef, useEffect } from 'react'

import {useGlobalContext} from './context'
const Submenu = () => {
  const {isSubMenuOpen, location, page:{page, links}} = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(()=> {
    setColumns(`col-2`)
    const submenu= container.current
    // console.log({submenu})
    const {center, bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if(links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [columns, location])
  console.log({isSubMenuOpen, location,page, links})
  return (
    <aside className={` submenu ${isSubMenuOpen? `show` : null}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((link, index)=> {
          const {label, icon, url} = link
          return <a href={url} key={index}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
    )
}

export default Submenu
