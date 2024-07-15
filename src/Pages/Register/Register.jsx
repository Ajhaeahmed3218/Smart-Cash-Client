import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/axiosPublic";


const Register = () => {
    const { createUser, setUser, upDateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const photo = form.photo.value;
        const password = form.password.value 
        const rool = "user"
        console.log(email, password,name,photo,phone);

        // if (!/[A-Z]/.test(password)) {
        //     return Swal.fire({
        //         title: 'error',
        //         text: "Please include at least one uppercase letter.",
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })

        // }
        if (!/^\d{5}$/.test(password)) {
            return Swal.fire({
                title: 'Error',
                text: "Please enter a valid 5-digit PIN. And only number",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        

        // if (password.length < 6) {

        //     return Swal.fire({
        //         title: 'error',
        //         text: "Password must be at least 6 characters long.",
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })
        // }
        const newPass = password + 1
        createUser(email, newPass)
            .then((result) => {
                // Signed up 
                upDateUserProfile(name, photo)
                .then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    console.log(error);
                    // An error occurred
                    // ...
                  });
                setUser(result.user)
                // Create user entry in the database
                const userInfo = {
                    name,
                    email,
                    rool,
                    phone,
                    newPass
                }
                // console.log(userInfo);
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate(location?.state ? location.state : '/')
                            return Swal.fire({
                                title: 'Success',
                                text: `Successfully Registerd.${name, email}`,
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })





                // ...
            })
            // .catch((error) => {
            //     console.error(error);
            //     return Swal.fire({
            //         title: 'error',
            //         text: (error.message),
            //         icon: 'error',
            //         confirmButtonText: 'Cool'
            //     })
            // })
    }
    return (
        <div>
            <div>

                <div className="hero md:min-h-screen bg-base-200">
                    {/* <Helmet>
                        <title>
                            Register | Forumify2
                        </title>
                    </Helmet> */}
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="md:mr-12 md:w-1/2 w-2/3">
                            <img src="smart-login.jpg" alt="" />
                        </div>
                        <div className="card card-body shrink-0 md:w-full  md:max-w-sm shadow-2xl bg-slate-400">
                            <h1 className="text-4xl font-semibold text-center mt-5">Register </h1>

                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                {/* <SocialLogin/> */}
                            </form>
                            <p className="my-4 text-center">Allready Have an acount ? <Link className="text-[#FF3811] font-bold" to={"/login"}>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;