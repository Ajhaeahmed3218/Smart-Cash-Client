import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
    const { login, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [newEmail, setNewEmail] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value + 1;
        console.log(email, password);

        const phone = email;

        setLoading(true);

        try {
            if (/^[0-9]+$/.test(phone)) {
                const response = await axios.get(`http://localhost:5000/login/${phone}`, {
                    withCredentials: true,
                });
                console.log('সার্ভার থেকে পাওয়া ডেটা:', response.data.user.email);
                setNewEmail(response.data.user.email);

                // Now that newEmail is set, proceed with login
                login(response.data.user.email, password)
                    .then(result => {
                        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                            .then(res => {
                                console.log(user);
                                if (res.data.success) {
                                    navigate(location?.state ? location.state : '/');
                                    Swal.fire({
                                        title: 'Success',
                                        text: "Successfully Login.",
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    });
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                                setLoading(false);
                                Swal.fire({
                                    title: 'Error',
                                    text: (error.message),
                                    icon: 'error',
                                    confirmButtonText: 'Cool'
                                });
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                        setLoading(false);
                        Swal.fire({
                            title: 'Error',
                            text: (error.message),
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        });
                    });
            } else {
                // If phone is not all numbers, proceed with regular login
                login(email, password)
                    .then(result => {
                        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                            .then(res => {
                                console.log(user);
                                if (res.data.success) {
                                    navigate(location?.state ? location.state : '/');
                                    Swal.fire({
                                        title: 'Success',
                                        text: "Successfully Login.",
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    });
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                                setLoading(false);
                                Swal.fire({
                                    title: 'Error',
                                    text: (error.message),
                                    icon: 'error',
                                    confirmButtonText: 'Cool'
                                });
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                        setLoading(false);
                        Swal.fire({
                            title: 'Error',
                            text: (error.message),
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        });
                    });
            }
        } catch (err) {
            console.error('সার্ভার থেকে ডেটা পেতে ত্রুটি:', err);
            setLoading(false);
            Swal.fire({
                title: 'Error',
                text: (err.message),
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
    };

    return (
        <div className="lg:pt-0 pt-20 ">
            <Helmet>
                <title>
                    Forumify | login
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src="smart-login.jpg" alt="" />
                    </div>
                    {loading ? (
                        <span className="loading loading-spinner loading-lg"></span>
                    ) : (
                        <div className="card card-body shrink-0 w-full max-w-sm shadow-2xl bg-slate-400">
                            <h1 className="text-4xl font-semibold text-center mt-5">Login </h1>

                            <form className="" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider"></div>
                                {/* <button onClick={handleGoogleLogin} className="btn border-blue-400 mr-6 mt-6 lg:w-1/2"><span className="text-xl text-blue-500"><FaGoogle /></span> Google</button> */}
                                {/* <SocialLogin/> */}
                            </form>

                            <p className="my-4 text-center">New to Nawab Sahab ? <Link className="text-[#FF3811] font-bold" to={"/register"}>Register</Link> </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
