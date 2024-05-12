export type NixToastProps = {
    toastImg?: string;
    toastType?: '1' | '2';
    position: string;
    barPosition?: string;
    barColor?: string;
    backgroundColor?: string;
}
export type NixToastWrapper = {
    id: string,
    toastType?: '1' | '2';
    position: string;
    duration: number;
    barPosition?: string;
    barColor?: string;
    type:string,
    msg:string,
    backgroundColor?: string;
    toastImg?: string;
    subscribe: boolean
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
    msg: string;
    subscribe: boolean;
}


export type NixToastFunctions = {
    nixToast: (message: string, duration:number, subscribe:boolean) => void;
    nixSuccess: (message: string, duration:number, subscribe:boolean) => void;
    nixError: (message: string, duration:number, subscribe:boolean) => void;
    nixWarn: (message: string, duration:number, subscribe:boolean) => void;
}

export type nixBtnProp = {
    hideToast: () => void;
};

export type ToastState = {
    animateInOutDuration: number;
    isQueue: { msg: string; type: string; duration: number; id: string, subscribe:boolean }[];
    setIsQueue: (newState: { msg: string; type: string; duration: number; id:string, subscribe:boolean }[]) => void;
}




