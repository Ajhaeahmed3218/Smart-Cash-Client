import { useContext } from "react";
import Banner from "../Components/Banner";

import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const Home = () => {
    
    const { user } = useContext(AuthContext)
    

    console.log(user);
    return (
        <div>
            <Banner /> 
        </div>
    );
};

export default Home;