import { create } from 'zustand';
import { ToastState } from '../types';


const animationDuration = 5


const UseToastStates = create<ToastState>((set) => ({
    animateInOutDuration: animationDuration,

    isQueue: [],
    setIsQueue: (newState) => set({ isQueue: newState }),
}));

export default UseToastStates;