import React, { useEffect, useRef } from 'react';
import Toaster1 from './toaster/toast1';
import Toaster2 from './toaster/toast2';
import '../assets/style.css';
import useNixToast from './hooks/useNixToast';
import { useToastStates } from './hooks/globalVariable';
import nixButtons from './hooks/buttonService';

interface NixToastProps  {
  type: '1' | '2';
  position: string;
  duration: number;
  barPosition?: string;
  barColor?: string;
}

const NixToast: React.FC<NixToastProps> = ({ type, position, duration, barPosition, barColor }: NixToastProps) => {
  const { isShow } = useToastStates();
  const { hideToast } = nixButtons();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const toastsProps = {
    position,
    duration,
    barPosition,
    barColor,
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
      {/* {type === '2' && <Toaster2 {...toastsProps} />} */}
    </React.Fragment>
  );
};

export default NixToast;