import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col gap-8">
            <Header />
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}
export default Layout;