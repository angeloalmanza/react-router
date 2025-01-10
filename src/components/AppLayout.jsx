import { Outlet } from "react-router-dom"
import MainNav from "./MainNav";

const AppLayout = () => {
    return(
        <>
        <header>
            <MainNav />
        </header>

        <Outlet />
        </>
    )
}

export default AppLayout;