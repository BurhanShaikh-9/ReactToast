import { create } from 'zustand';

const animationDuration = 5
export const useToastStates = create((set) => ({
    animateInOutDuration: animationDuration,

    isShow: { show: false, triggerAnimation: false },
    isHide: () => {
        set((state) => ({ isShow: { ...state.isShow, show: false, triggerAnimation: true } }));
        // setTimeout(() => {
        //     set((state) => ({ ...state, isShow: { ...state.isShow, show: false } }));
        // }, animationDuration * 1000);
    },
    setIsShow: () => set((state) => ({ ...state, isShow: { show:true, triggerAnimation: true } })),

    isMsg: '',
    setIsMsg: (msg) => set((state) => ({ ...state, isMsg: msg })),

    isBarColor: '',
    setBarColor: (color) => set((state) => ({ ...state, isBarColor: color })),
}));