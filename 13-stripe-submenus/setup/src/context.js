import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()
export const AppProvider =({children})=> {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})
    const openSidebar =()=> {
        setIsSidebarOpen(true)
    }
    const closeSidebar =()=> {
        setIsSidebarOpen(false)
    }
    const openSubMenu =(text, coordinates)=> {
        const specpage = sublinks.find(link => link.page === text)
        setPage(specpage)
        setLocation(coordinates)
        setIsSubMenuOpen(true)
    }
    const closeSubMenu =()=> {
        setIsSubMenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubMenuOpen,
        page,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        location
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =()=> {
    return useContext(AppContext)
} 

