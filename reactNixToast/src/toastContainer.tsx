import React from 'react'
import { NixToastWrapper } from './types'
import Toaster from './toaster/toast1';


export const ToastContainer = ({ toastImg, toastType, position, barPosition, barColor, backgroundColor, type, msg, duration, id, subscribe }: NixToastWrapper) => {


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
            {/* Toast Container will render different types of Toasters depending on the toastType props default will be toast 1 */}
            <Toaster {...toastsProps} />
        </React.Fragment>
    )
}
