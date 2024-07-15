

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
            <div className="text-blackck lg:pl-44 pl-10">
                <h1 className="text-4xl font-bold  mb-4">Welcome to <span className="text-[#1a3070]">Smart</span><span className="text-orange-600">Cash</span></h1>
                <p className="text-lg ">Your new destination for mobile financial services. <br />Send money securely, cash out, and more, all in one place.</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">Get Started</button>

            </div>
            <div className="lg:w-[50%] ">
                <img src="Smart-Cash.png" alt="logo" />
            </div>
        </div>
    );
};

export default Banner;