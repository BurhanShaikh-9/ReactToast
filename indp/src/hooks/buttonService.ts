import { nixBtnProp } from '../types';
import UseToastStates from './globalVariable';




const NixButtons = (): nixBtnProp => {
  const { isHide } = UseToastStates();

  const hideToast: () => void = () => {
    isHide();
    // clearTimeout(); 
  };

  return { hideToast };
};

export default NixButtons;