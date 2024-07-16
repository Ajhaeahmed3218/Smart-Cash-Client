import { TbLocationDollar, TbBasketDollar  } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";
const UserProfile = () => {
    return (
        <div className="">
            <div className="flex items-center lg:gap-6 gap-3 border-2 lg:w-2/3 lg:p-3 lg:mt-3 bg-orange-400 rounded-full">
                <div className="avatar">
                    <div className="w-16 ml-14  rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold">Ajhar Ahmed</h1>
                    <p>Admin</p>
                </div>

            </div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <Link to={'/dashbord/sendMoney'} className="p-4 md:w-1/6 sm:w-1/6 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <TbLocationDollar className="text-pink-400 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-gray-900">Send Money</h2>
                                <p className="leading-relaxed"></p>
                            </div>
                        </Link>

                        <Link to={'/dashbord/cashOut'} className="p-4 md:w-1/6 sm:w-1/6 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <GiTakeMyMoney className="text-green-500 w-12 h-12 mb-3 inline-block"/>
                                <h2 className="title-font font-medium text-3xl text-gray-900">Cash-Out</h2>
                                <p className="leading-relaxed"></p>
                            </div>
                        </Link>

                        < Link to={'/dashbord/cashIn'} className="p-4 md:w-1/6 sm:w-1/6 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <TbBasketDollar  className="text-purple-400 w-12 h-12 mb-3 inline-block"/>
                                <h2 className="title-font font-medium text-3xl text-gray-900">Cash-in</h2>
                                <p className="leading-relaxed"></p>
                            </div>
                        </Link>

                        <Link to={'/dashbord/hitory'} className="p-4 md:w-1/6 sm:w-1/6 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <MdOutlineManageHistory  className="text-orange-300 w-12 h-12 mb-3 inline-block"/>
                                <h2 className="title-font font-medium text-3xl text-gray-900">History</h2>
                                <p className="leading-relaxed"></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserProfile;