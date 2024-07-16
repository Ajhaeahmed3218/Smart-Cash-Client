import  { useState } from 'react';
import { BsPostcardFill } from "react-icons/bs";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdLocalActivity, MdManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isAdmin = 'admin';

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative lg:w-full  bg-[#e4e8f3]">
            <div className="lg:flex lg:w-full w-full">
                <div className={`w-64 min-h-[100vh] bg-orange-400 p-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0 bg-slate-400 ' : '-translate-x-full lg:static fixed z-30'} md:translate-x-0`}>
                    <div className="my-6 ">
                    <h1 className=" text-2xl lg:ml-10 md:mr-0 font-extrabold text-[#1a3070]">Smart<span className="text-orange-600">Cash</span></h1>
                        <p className="text-center lato-italic">Connect, Share, and Grow Together.</p>
                    </div>
                    <ul className="menu space-y-4 text-xl">
                        {isAdmin === "admin" ? (
                            <>
                                <li><NavLink to={'/dashbord/adminProfile'}><FaUserAlt />  Admin Profile <span>(admin)</span></NavLink></li>
                                <li ><NavLink to={'/dashbord/manageUsers'}><MdManageAccounts className="text-2xl"/>  Manage Users</NavLink></li>
                                <li><NavLink to={'/dashbord/ReportedActivities'}> <MdLocalActivity className="text-[24px]" /> Reported Activities</NavLink></li>
                                <li><NavLink to={'/dashbord/announcement'}><BsPostcardFill />Announcement</NavLink></li>
                            </>
                        ) : isAdmin === "user" ? (
                            <>
                                <li><NavLink to={'/dashbord/userProfile'}><FaUserAlt />  My Profile<span>(user)</span></NavLink></li>
                                {/* <li><NavLink to={'/dashbord/sendMoney'}><BsPostcardFill />Send Money</NavLink></li>
                                <li><NavLink to={'/dashbord/userAddPost'}> <MdOutlinePostAdd className="text-[24px]" /> Add Post</NavLink></li> */}
                            </>
                        ) : <>
                        <li><NavLink to={'/dashbord/userProfile'}><FaUserAlt />  Agent Profile</NavLink></li>
                        <li><NavLink to={'/dashbord/userPosts'}><BsPostcardFill />  My Posts</NavLink></li>
                        <li><NavLink to={'/dashbord/userAddPost'}> <MdOutlinePostAdd className="text-[24px]" /> Add Post</NavLink></li>
                    </>}
                        <div className="divider"></div>
                        {/* Shared navlink */}
                        <li><NavLink to={'/'}><FaHome />  Home</NavLink></li>
                        <li><NavLink to={'/membership'}><BsPostcardFill />  Membership</NavLink></li>
                    </ul>
                </div>

                <div className="flex-1 md:ml-10">
                    <Outlet />
                </div>
            </div>

            <button className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
                <FaBars className="text-2xl" />
            </button>
        </div>
    );
};

export default Dashboard;
