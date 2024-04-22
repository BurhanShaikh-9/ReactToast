import { atom, selector } from "recoil";

export const toastVisibilityAtom = atom({
    key: 'toastVisiblityAtom',
    default: false,
});
export const toastVisibilityShow = selector({
    key: 'toastVisibilityShow',
    get: ({ get }) => {
        const toastVisiblity = get(toastVisibilityAtom);
        const toastSelect = toastVisiblity ? "yes" : "no"
        return toastSelect;
    },
});
