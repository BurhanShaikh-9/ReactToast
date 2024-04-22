import { create } from 'zustand';

const animationDuration = 5
 const useToastStates = create((set) => ({
    animateInOutDuration: animationDuration,

    isShow: { show: false, triggerAnimation: false },
    isHide: () => {set((state) => ({ isShow: { ...state.isShow, show: false, triggerAnimation: true } }));},
    setIsShow: () => set((state) => ({ ...state, isShow: { show:true, triggerAnimation: true } })),

    isMsg: '',
    setIsMsg: (msg) => set((state) => ({ ...state, isMsg: msg })),

    isBarColor: '',
    setBarColor: (color) => set((state) => ({ ...state, isBarColor: color })),
}));


export default useToastStates


// const toastVisiblityAtom = atom({
//     key: 'toastVisiblityAtom',
//     default: false,
// });
// export const toastVisiblityShow = selector({
//     key: 'toastVisiblityShow',
//     get: ({ get }) => {
//         const toastVisiblity = get(toastVisiblityAtom);
//         return toastVisiblity;
//     },
// });
