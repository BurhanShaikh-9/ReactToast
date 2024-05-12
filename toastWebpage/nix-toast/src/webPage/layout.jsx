import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"
import Sidebar from "./components/Sidebar"
import BreadCrumb from "./components/breadCrumb"


const layout = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="flex dark:bg-neutral-800">
                <Sidebar />
                <div className="ms-5 mt-3">
                    <BreadCrumb />
                    <div className="m-5">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default layout