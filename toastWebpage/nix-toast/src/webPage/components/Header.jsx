import { GrSun } from "react-icons/gr";

import { FaGithub, FaRegMoon } from "react-icons/fa";
import useTheme from "../../globalStore/theme";

const Header = () => {
    const { toggleTheme, theme } = useTheme();

    const onChangeTheme = () => {
        toggleTheme()
    }


    return (
        <header className='flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] dark:bg-neutral-800 '>
            <div className='flex flex-wrap items-center gap-5 w-full'>
                <div className="dark:text-gray-300">NixToast</div>
                <div className='flex lg:ml-auto max-lg:w-full'>
                    <div className="flex gap-5">
                        <div className="flex gap-2 dark:text-gray-300">
                            <FaGithub />
                            <a href="https://github.com/BurhanShaikh-9/ReactToast.git" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                        <button onClick={onChangeTheme}> {theme === 'light' ?  <GrSun /> : <FaRegMoon className="text-purple-400"/> }</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header