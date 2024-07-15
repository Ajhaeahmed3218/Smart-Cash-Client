import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? " border-2 border-none bg-[#bdcbf4] py-3 px-5 font-bold rounded-xl text-pink-500" : "font-bold py-3 px-5 lg:text-black "}>Home</NavLink></li>

        <li><NavLink to={"/membership"} className={({ isActive }) => isActive ? " border-2 border-none bg-[#bdcbf4]  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-bla"}>About</NavLink></li>

        <li><NavLink to={"/login"} className={({ isActive }) => isActive ? " border-2 border-none bg-[#bdcbf4]  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-black"}>Servises</NavLink></li>

        <li><NavLink to={"/login"} className={({ isActive }) => isActive ? " border-2 border-none bg-[#bdcbf4]  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-black"}>Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100  dm-sans fixed z-30  lg:px-36">
        <div className="">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-8">
                    {navLink}
                </ul>
            </div>

            <a className=" text-2xl lg:mr-16 md:mr-0 font-extrabold text-[#bdcbf4]">Smart<span className="text-pink-500">Cash</span></a>
        </div>
        <div className="navbar-start hidden lg:flex ">
            <ul className="menu menu-horizontal lg:px-1 lg:gap-6 md:gap-0">

                {navLink}
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            <div>
                <form className="max-w-md mx-auto hidden lg:flex lg:w-full md:w[40%] mr-4">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block lg:w-[300px] md:w-md:w[40%]  p-2 ps-10 rounded-full text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-black absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py- dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>

            <div className="dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>

        </div>
    </div>
    );
};

export default Navbar;