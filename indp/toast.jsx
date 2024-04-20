import React from 'react'
import Toaster1 from './toaster/toast1'
import Toaster2 from './toaster/toast2'
import './assets/style.css'


const NixToast = ({type, position, duration, barPosition, barColor}) => {
 
  const toastsProps = {
    position,
    duration,
    barPosition,
    barColor
  }
  return (
    <React.Fragment>
      { type === '1' && <Toaster1 {...toastsProps} />}
      { type === '2' && <Toaster2 {...toastsProps} />}
      
    </React.Fragment>
  )
}

export default NixToast