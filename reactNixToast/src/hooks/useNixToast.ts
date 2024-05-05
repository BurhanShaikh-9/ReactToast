import { NixToastFunctions } from '../types';
import CustomHooks from './customHooks';
import UseToastStates from './globalVariable';



const UseNixToast = (): NixToastFunctions => {
  const {generateRandomId} = CustomHooks()
  const { setIsQueue, isQueue } = UseToastStates();

  const nixToast = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '1', duration: duration, id: generateRandomId() }])
};

  const nixSuccess = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '2', duration: duration, id: generateRandomId() }])
  };

  const nixError = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '3', duration: duration, id: generateRandomId() }])
  };

  const nixWarn = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '4', duration: duration, id: generateRandomId() }])
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default UseNixToast;