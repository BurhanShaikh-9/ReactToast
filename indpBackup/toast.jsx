import React, { useEffect, useRef } from 'react';
import Toaster1 from './toaster/toast1';
import Toaster2 from './toaster/toast2';
import './assets/style.css';
import useNixToast from './hooks/useNixToast';
import useToastStates from './hooks/globalVariable';
import nixButtons from './hooks/buttonService';
import { toastVisibilityShow } from '../dummy/src/variable/globalVariable';

const Toaster = ({ type, position, duration, barPosition, barColor }) => {

  const isShow = useRecoilValue(toastVisibilityShow);
  const { hideToast } = nixButtons();
  const timeoutRef = useRef(null);

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
        {type === '2' && <Toaster2 {...toastsProps} />}
    </React.Fragment>
  );
};

export default Toaster;