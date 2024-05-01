import { NixToastFunctions } from '../types';
import UseToastStates from './globalVariable';



const UseNixToast = (): NixToastFunctions => {
  const succImg = 'https://react-toast-iota.vercel.app/success.gif'
  const errorImg = 'https://react-toast-iota.vercel.app/Error.gif'
  const warningImg = 'https://react-toast-iota.vercel.app/warn1.gif'
  const defaultImg = 'https://icons8.com/icon/OTMzMKil7ecs/n'

  const { setIsShow, setIsMsg, setBarColor, setIsImg } = UseToastStates();

  const nixToast = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#2b2b2b');
    setIsImg(defaultImg)
  };

  const nixSuccess = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#00CC66');
    setIsImg(succImg)
  };

  const nixError = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#FF6347');
    setIsImg(errorImg);
  };

  const nixWarn = (message: string) => {
    setIsShow();
    setIsMsg(message);
    setBarColor('#FF6347');
    setIsImg(warningImg);
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default UseNixToast;