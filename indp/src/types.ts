export type NixToastProps = {
    type: '1' | '2';
    position: string;
    duration: number;
    barPosition?: string;
    barColor?: string;
    backgroundColor?: string;
}


export type ToasterProps = {
    position: string;
    duration: number;
    barPosition?: string;
    barColor?: string;
    backgroundColor?: string;
}


export type NixToastFunctions = {
    nixToast: (message: string) => void;
    nixSuccess: (message: string) => void;
    nixError: (message: string) => void;
    nixWarn: (message: string) => void;
}

export type nixBtnProp = {
    hideToast: () => void;
};

export type ToastState = {
    animateInOutDuration: number;
    isShow: {
        show: boolean;
        triggerAnimation: boolean;
    };
    isHide: () => void;
    setIsShow: () => void;
    isMsg: string;
    setIsMsg: (msg: string) => void;
    isBarColor: string;
    setBarColor: (color: string) => void;
    isBackgroundColor: string;
    setBackgroundColor: (color: string) => void;
    isImg: string;
    setIsImg: (img: string) => void;
}




