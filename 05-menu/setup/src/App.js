import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])
  const uniqueCategories =()=> {
    const set = new Set()
    items.map(item=> set.add(item.category))
    return set
  }
  const catSend = uniqueCategories()
  const filterItems =(str)=> {
    const filteredItem = items.filter(item => item.category === str )
    setMenuItems(filteredItem)
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
