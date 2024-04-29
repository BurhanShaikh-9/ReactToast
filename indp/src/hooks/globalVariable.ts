import { create } from 'zustand';

interface ToastState {
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
}




const animationDuration = 5
export const useToastStates = create<ToastState>((set) => ({
    animateInOutDuration: animationDuration,

    isShow: { show: false, triggerAnimation: false },
    isHide: () => {
        set((state) => ({ isShow: { ...state.isShow, show: false, triggerAnimation: true } }));
        // setTimeout(() => {
        //     set((state) => ({ ...state, isShow: { ...state.isShow, show: false } }));
        // }, animationDuration * 1000);
    },
    setIsShow: () => set((state) => ({ ...state, isShow: { show: true, triggerAnimation: true } })),

    isMsg: '',
    setIsMsg: (msg) => set((state) => ({ ...state, isMsg: msg })),

    isBarColor: '',
    setBarColor: (color) => set((state) => ({ ...state, isBarColor: color })),
}));