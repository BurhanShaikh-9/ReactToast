import { NixToastFunctions } from '../types';
import CustomHooks from './customHooks';
import UseToastStates from './globalVariable';



const UseNixToast = (): NixToastFunctions => {
  const { generateRandomId } = CustomHooks()
  const isQueue = UseToastStates(state => state.isQueue);
  const setIsQueue = UseToastStates(state => state.setIsQueue);

  const nixToast = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '1', duration: duration, id: generateRandomId(), subscribe: true }])
  };

  const nixSuccess = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '2', duration: duration, id: generateRandomId(), subscribe: true }])
  };

  const nixError = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '3', duration: duration, id: generateRandomId(), subscribe: true }])
  };

  const nixWarn = (message: string, duration: number) => {
    setIsQueue([...isQueue, { msg: message, type: '4', duration: duration, id: generateRandomId(), subscribe: true }])
  };

  return { nixToast, nixSuccess, nixError, nixWarn };
};

export default UseNixToast;