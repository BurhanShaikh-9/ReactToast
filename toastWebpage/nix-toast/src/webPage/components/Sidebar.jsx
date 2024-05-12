import { NavLink } from "react-router-dom"
import { ROUTES } from "../../utils/services"


const Sidebar = () => {


    return (
        <aside className="flex flex-col min-w-64 h-screen px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l ">
            <div className="flex flex-col justify-between flex-1">
                <nav>
                    <div className="mb-4">
                        <label className="py-3 text-xs text-gray-700 uppercase dark:text-gray-300">Getting Started</label>
                        <NavLink className="flex items-center py-2 px-3 text-gray-600 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:rounded-md" to={ROUTES.HOME}>
                            <span className="mx-2 text-sm font-medium">Introduction</span>
                        </NavLink>
                        <NavLink className="flex items-center py-2 px-3 text-gray-600 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:rounded-md" to={ROUTES.INSTALL}>
                            <span className="mx-2 text-sm font-medium">Installation</span>
                        </NavLink>
                        <NavLink className="flex items-center py-2 px-3 text-gray-600 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:rounded-md" to={ROUTES.CONFIGURE}>
                            <span className="mx-2 text-sm font-medium">Configuration</span>
                        </NavLink>
                    </div>

                    <div className="mb-4">
                        <label className="py-3 text-xs text-gray-700 uppercase dark:text-gray-300">Usage</label>
                        <NavLink className="flex items-center py-2 px-3 text-gray-600 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:rounded-md" to="#">
                            <span className="mx-2 text-sm font-medium">Positioning</span>
                        </NavLink>

                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar