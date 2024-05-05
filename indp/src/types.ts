export type NixToastProps = {
    id: string,
    toastType: '1' | '2';
    position: string;
    duration: number;
    barPosition?: string;
    barColor?: string;
    type:string,
    msg:string,
    backgroundColor?: string;
    toastImg?: string;
}


export type ToasterProps = {
    id:string;
    position: string;
    duration: number;
    barPosition?: string;
    barColor?: string;
    backgroundColor?: string;
    type: string;
    toastImg?: string;
    msg: string
}


export type NixToastFunctions = {
    nixToast: (message: string, duration:number) => void;
    nixSuccess: (message: string, duration:number) => void;
    nixError: (message: string, duration:number) => void;
    nixWarn: (message: string, duration:number) => void;
}

export type nixBtnProp = {
    hideToast: () => void;
};

export type ToastState = {
    animateInOutDuration: number;
    isQueue: { msg: string; type: string; duration: number; id: string }[];
    setIsQueue: (newState: { msg: string; type: string; duration: number; id:string }[]) => void;
}




