import { create } from 'zustand';
import { ToastState } from '../types';


const animationDuration = 5

const UseToastStates = create<ToastState>((set) => ({
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


    isImg:'',
    setIsImg: (img) => set((state) => ({ ...state, isImg: img })),
}));

export default UseToastStates;