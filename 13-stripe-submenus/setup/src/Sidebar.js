import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  console.log({sublinks})
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className={` sidebar-wrapper ${isSidebarOpen ? `show` : null}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {
            sublinks.map(( item, index)=> {
              const {page,links} = item
              return <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  { 
                    links.map((link, index2)=> {
                      const {url, icon, label} = link
                      return (
                        <a href={url} key={index2}>
                          {icon}
                          {label}
                        </a>
                      )
                    })
                  }
                </div>
              </article>
            })
          }
        </div>
      </div>
    </aside>
    )
}

export default Sidebar
