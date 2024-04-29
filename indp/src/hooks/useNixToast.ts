import { useToastStates } from './globalVariable';

interface NixToastFunctions {
  nixToast: (message: string) => void;
  nixSuccess: (message: string) => void;
  nixError: (message: string) => void;
  nixWarn: (message: string) => void;
}

const useNixToast = (): NixToastFunctions => {
  const { setIsShow, setIsMsg, setBarColor } = useToastStates();

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

export default useNixToast;