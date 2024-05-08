import React from 'react';
import UseNixToast from "./hooks/useNixToast";
import UseToastStates from './hooks/globalVariable';
import { NixToastProps } from './types';
import { ToastContainer } from './toastContainer';
import '../assets/style.css';



const NixToast: React.FC<NixToastProps> = ({ toastImg, toastType, position, barPosition, barColor, backgroundColor }: NixToastProps) => {
  const { isQueue } = UseToastStates();


  const toastsProps = {
    toastType,
    position,
    barPosition,
    barColor,
    backgroundColor,
    toastImg
  };

  return (
    <React.Fragment>
      <div className={`nix_allToast nix_toast_${position}`}>

        {
          isQueue.map((item, keyId) => {
            return (
              <div key={keyId}  className='nix_allToastIn' >
                <ToastContainer {...toastsProps} {...item} />
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  );
};

export { NixToast, UseNixToast };