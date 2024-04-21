import { create } from 'zustand'

export const useToastStates = create((set) => ({
    isShow: false,
    isHide: () => set({ isShow: false }),
    setIsShow: (show) => set({ isShow: show }),

    isMsg:'',
    setIsMsg: (msg) => set( {isMsg: msg} ),

    isBarColor:'',
    setBarColor: (color) => set( {isBarColor: color} ),
}))
