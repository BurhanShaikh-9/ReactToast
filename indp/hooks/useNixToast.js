import React, { useState } from 'react';
import { useToastStates } from './globalVariable';


const useNixToast = () => {

  const { setIsShow, setIsMsg, setBarColor } = useToastStates()


  const nixToast = (message) => {
    setIsShow(true)
    setIsMsg(message)
  };

  const nixSuccess = (message) => {
    setIsShow(true)
    setIsMsg(message)
    setBarColor('#00CC66')
  };

  const nixError = (message) => {
    setIsShow(true)
    setIsMsg(message)
    setBarColor('#FF6347')
  };

  const nixWarn = (message) => {
    setIsShow(true)
    setIsMsg(message)
    setBarColor()
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default useNixToast;