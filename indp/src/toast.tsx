import React, { useEffect, useRef } from 'react';
import Toaster1 from './toaster/toast1';
import Toaster2 from './toaster/toast2';
import '../assets/style.css';
import UseNixToast from "./hooks/useNixToast";
import  UseToastStates  from './hooks/globalVariable';
import NixButtons from './hooks/buttonService';
import { NixToastProps } from './types';



const NixToast: React.FC<NixToastProps> = ({ type, position, duration, barPosition, barColor, backgroundColor }: NixToastProps) => {
  const { isShow } = UseToastStates();
  const { hideToast } = NixButtons();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const toastsProps = {
    position,
    duration,
    barPosition,
    barColor,
    backgroundColor
  };

  useEffect(() => {
    if (isShow.show) {
      timeoutRef.current = setTimeout(() => {
        hideToast();
        timeoutRef.current = null;
      }, duration * 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isShow.show]);

  if (!isShow.show) return null;

  return (
    <React.Fragment>
      {type === '1' && <Toaster1 {...toastsProps} />}
    </React.Fragment>
  );
};

export {NixToast, UseNixToast};