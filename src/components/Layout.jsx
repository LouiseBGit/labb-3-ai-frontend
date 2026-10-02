import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                {/*Här visas den sidan som matchar aktuell route */}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
