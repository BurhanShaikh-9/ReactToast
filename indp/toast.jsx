import React, { useEffect } from 'react'
import Toaster1 from './toaster/toast1'
import Toaster2 from './toaster/toast2'
import './assets/style.css'
import useNixToast from './hooks/useNixToast'
import { useToastStates } from './hooks/globalVariable'


const NixToast = ({ type, position, duration, barPosition, barColor }) => {

  const { isShow, isHide } = useToastStates()

  const toastsProps = {
    position,
    duration,
    barPosition,
    barColor,

  }

  useEffect(() => {
    if (isShow) {
      const timeout = setTimeout(() => {isHide()}, duration * 1000); 
      return () => clearTimeout(timeout);
    }
  }, [isShow]);

  if (!isShow) return null;

  return (
    <React.Fragment>
      {type === '1' && <Toaster1 {...toastsProps} />}
      {type === '2' && <Toaster2 {...toastsProps} />}

    </React.Fragment>
  )
}

export default NixToast