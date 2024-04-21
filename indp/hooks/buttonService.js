import React from 'react'
import { useToastStates } from './globalVariable'

const nixButtons = () => {
    const { isHide } = useToastStates()

    const hideToast = () =>{
        isHide()
        clearTimeout()
    }

  return {hideToast}
}

export default nixButtons