import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,  weight, index}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join((','))
  const hexVal= rgbToHex(...rgb)
  // const hexVal = `${hex}`
  useEffect(()=> {
    const clipInt = setInterval(()=> {
      setAlert(false)
    }, 3000)
    return ()=> clearInterval(clipInt)
  },[alert])
  return (
    <article className={`color ${index > 10 && `color-light`}`} 
            style={
              {
                backgroundColor:`rgb(${bcg})`
              }
              }
            onClick={()=> {
              setAlert(true)
              navigator.clipboard.writeText(hexVal)
            }}
            >
      <p className='percent-value'>{weight}%</p>
      <p className="color-value">
        {
          hexVal
        }
      </p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
    )
}

export default SingleColor
