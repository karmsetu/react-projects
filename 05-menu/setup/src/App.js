import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [active, setActive] = useState({})
  useEffect(()=> {
    const uc = uniqueCategories()
    const stateGen = {}
    uc.forEach(elem => stateGen[elem] = false)
    setActive(stateGen)

  },[])
  const toggleActive=(str)=> {
    for (const elem in active) {
      active[elem] = elem === str ? !active[elem] :active[elem] 
    }
  }
  const uniqueCategories =()=> {
    const set = new Set()
    items.map(item=> set.add(item.category))
    return set
  }
  const catSend = uniqueCategories()
  const filterItems =(str)=> {
    const ifBool = Object.values(active).every(elem => !elem)
    const filteredItem = items.filter(item => item.category === str )
    setMenuItems(filteredItem)
    console.log(ifBool)
  }
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h3>Our Menu</h3>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} catSend={catSend}/>
        <Menu items={menuItems}/>
      </section>
    </main>  
  );
}

export default App;
