import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className='bg-gray-200 py-2 h-full'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout