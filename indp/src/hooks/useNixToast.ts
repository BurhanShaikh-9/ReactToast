import { NixToastFunctions } from '../types';
import  UseToastStates from './globalVariable';



const UseNixToast = (): NixToastFunctions => {
  const { setIsShow, setIsMsg, setBarColor } = UseToastStates();

  const nixToast = (message: string) => {
    setIsShow();
    setIsMsg(message);
  };

  const nixSuccess = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#00CC66');
  };

  const nixError = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#FF6347');
  };

  const nixWarn = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#FF6347');
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default UseNixToast;