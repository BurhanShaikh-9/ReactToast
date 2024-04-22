// import { create } from 'zustand';

// const animationDuration = 5
// const useToastStates = create((set) => ({
//     animateInOutDuration: animationDuration,

//     isShow: { show: false, triggerAnimation: false },
//     isHide: () => { set((state) => ({ isShow: { ...state.isShow, show: false, triggerAnimation: true } })); },
//     setIsShow: () => set((state) => ({ ...state, isShow: { show: true, triggerAnimation: true } })),

//     isMsg: '',
//     setIsMsg: (msg) => set((state) => ({ ...state, isMsg: msg })),

//     isBarColor: '',
//     setBarColor: (color) => set((state) => ({ ...state, isBarColor: color })),
// }));


// export default useToastStates



import { atom, selector } from "recoil";


const useToastStates = () => {

    const animationDuration = 5

    const toastVisiblityAtm = atom({ key: 'toastVisiblityAtom', default: { show: false, triggerAnimation: false } });
    const toastMessageAtm = atom({ key: 'toastMessage', default: "This is Toast" });
    const toastBarColorAtm = atom({ key: 'toastBarColor', default: "#800080" });

    const toastIsShowing = selector({
        key: 'toastIsShow',
        get: ({ get }) => {
            const toastVisiblity = get(toastVisiblityAtm);
            if (toastVisiblity.show) {
                return { ...toastVisiblity, show: true, triggerAnimation: true }
            }
            return { ...toastVisiblity, show: false, triggerAnimation: false }
        },
    });
    // const toastIsHide = selector({
    //     key: 'toastIsHide',
    //     get: ({ get }) => {
    //         const toastVisiblity = get(toastVisiblityAtm);
    //         return { ...toastVisiblity, show: false, triggerAnimation: true }
    //     },
    // });




    return { toastVisiblityAtm, toastMessageAtm, toastBarColorAtm, toastIsShowing, animationDuration }
}

export default useToastStates
