import React from 'react'
import { NixToastProps } from './types'
import Toaster from './toaster/toast1';
import { UseNixToast } from './toast';

export const ToastContainer = ({ toastImg, toastType, position, barPosition, barColor, backgroundColor, type, msg, duration, id, subscribe }: NixToastProps) => {

  
    const toastsProps = {
        id,
        toastImg,
        type,
        msg,
        toastType,
        position,
        duration,
        barPosition,
        barColor,
        backgroundColor,
        subscribe
    };

    return (
        <React.Fragment>
            {toastType === '1' && <Toaster {...toastsProps} />}
        </React.Fragment>
    )
}
