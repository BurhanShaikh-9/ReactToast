import React, { useState } from 'react';
import  useToastStates  from './globalVariable';
import { useRecoilState, useRecoilValue } from 'recoil';

const useNixToast = () => {

  const { toastIsShow, toastMessageAtm, toastBarColorAtm } = useToastStates()
  const [msg, setMessage] = useRecoilState(toastMessageAtm);
  const [barColor, setBarColor] = useRecoilState(toastBarColorAtm);


  const nixToast = (message) => {
    setIsShow()
    setMessage(message)
  };

  const nixSuccess = (message) => {
    toastIsShow()
    setMessage(message)
    setBarColor('#00CC66')
  };

  const nixError = (message) => {
    toastIsShow()
    setMessage(message)
    setBarColor('#FF6347')
  };

  const nixWarn = (message) => {
    toastIsShow()
    setMessage(message)
    setBarColor()
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default useNixToast;