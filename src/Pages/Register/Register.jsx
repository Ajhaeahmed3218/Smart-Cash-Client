import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/axiosPublic";
import useAllRequest from "../../Hooks/useAllRequest";

const Register = () => {
    const { createUser, setUser, upDateUserProfile, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    // tenstak
    const [request] = useAllRequest();
    const [role, setRole] = useState("user");

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, password, name, photo, phone, role);

        if (!/^\d{5}$/.test(password)) {
            return Swal.fire({
                title: 'Error',
                text: "Please enter a valid 5-digit PIN. And only number",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        const newPass = password + 1;
        createUser(email, newPass)
            .then((result) => {
                upDateUserProfile(name, photo)
                    .then(() => {
                        setUser(result.user);
                        const userInfo = {
                            name,
                            email,
                            role,
                            phone,
                            password: newPass, // Ensure this matches backend field
                        };

                        axiosPublic.post('http://localhost:5000/request', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    navigate(location?.state ? location.state : '/');
                                    return Swal.fire({
                                        title: 'Success',
                                        text: `Successfully Registered. ${name, email}`,
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    });
                                }
                            })
                            .catch(error => {
                                console.error(error);
                                Swal.fire({
                                    title: 'Error',
                                    text: error.message,
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                });
                            });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'error',
                    text: (error.message),
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    };

    const isRequest = request.find(users => users?.email === user?.email);
    console.log(isRequest?.email, user, request);

    return (
        <div>
            <div className="hero md:min-h-screen bg-base-200">
                {isRequest?.email ? (
                    <div className="relative m-16 lg:mt-1 mt-28">
                        <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-[#7e22ce] text-white font-bold">
                            WARNING!
                        </button>

                        <div className="purple_border p-8 border border-black">
                            The
                            <span className="font-mono text-purple-700 font-bold">Request</span>
                            is Pending
                        </div>
                    </div>
                ) : (
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="md:mr-12 md:w-1/2 w-2/3">
                            <img src="smart-login.jpg" alt="" />
                        </div>
                        <div className="card card-body shrink-0 md:w-full md:max-w-sm shadow-2xl bg-slate-400">
                            <h1 className="text-4xl font-semibold text-center mt-5">Register</h1>
                            <form onSubmit={handleLogin}>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="role" value="user" checked={role === "user"} onChange={handleRoleChange} className="radio radio-primary" />
                                        <span className="label-text ml-2">User</span>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="role" value="agent" checked={role === "agent"} onChange={handleRoleChange} className="radio radio-primary" />
                                        <span className="label-text ml-2">Agent</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className="my-4 text-center">Already Have an account? <Link className="text-[#FF3811] font-bold" to={"/login"}>Login</Link> </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
