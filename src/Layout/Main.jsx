import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const Main = () => {
    return (
        <div className="bg-[#e4e8f3]">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;