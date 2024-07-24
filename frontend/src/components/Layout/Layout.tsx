import React from "react";
import Header from "../Header/Header";
interface IChildrenProps {
    children : React.ReactNode
}

const Layout = ({children} :IChildrenProps) => {
    return (
        <div className="flex flex-col gap-8">
            <Header />
            <div className="max-w-6xl mx-auto w-full">
                {
                    children
                }
            </div>
        </div>
    )
}
export default Layout;