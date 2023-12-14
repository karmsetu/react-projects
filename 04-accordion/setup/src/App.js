import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [dataPoint, setDataPoint] = useState(data)
  // const elem
  console.log(dataPoint)
  // const elem = dataPoint.map(console.log(`boi`))
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login </h3>
        <section className='info'>
          {
            dataPoint.map(question => <SingleQuestion key={question.id} {...question}/>)
          }
        </section>
      </div>
    </main>
    );
}

export default App;
