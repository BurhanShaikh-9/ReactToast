import { create } from 'zustand';

const useTheme = create((set) => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme ? savedTheme : 'light';

    return {
        theme: initialTheme,
        toggleTheme: () =>
            set((state) => {
                const newTheme = state.theme === 'light' ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                return { theme: newTheme };
            }),
    };
});

export default useTheme;



