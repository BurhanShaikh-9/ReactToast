import { useToastStates } from './globalVariable';

type NixButtonsReturnType = {
  hideToast: () => void;
};

const nixButtons = (): NixButtonsReturnType => {
  const { isHide } = useToastStates();

  const hideToast: () => void = () => {
    isHide();
    // clearTimeout(); 
  };

  return { hideToast };
};

export default nixButtons;