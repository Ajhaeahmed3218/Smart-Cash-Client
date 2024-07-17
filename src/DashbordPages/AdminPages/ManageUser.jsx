import { FaUsers } from "react-icons/fa";
import useAllRequest from "../../Hooks/useAllRequest";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axiosPublic";
import axios from "axios";


const ManageUser = () => {
    const [request, refetch] = useAllRequest();
    console.log(request);
    // const navigate = useNavigate();
    // const location = useLocation();
    const axiosPublic = useAxiosPublic();


    const handleConfirm = (data) => {
        if (data.role === 'user') {
            data.tk = 40;  // Add new field 'tk' with value 40
            console.log(data, 'user');

            axios.post('http://localhost:5000/register', data, { withCredentials: true })
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        return Swal.fire({
                            title: 'Success',
                            text: `Successfully Registered. ${data.name, data.email}`,
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
        } else {
            data.tk = 10000;
            console.log(data, 'Agent');
            axios.post('http://localhost:5000/register', data, { withCredentials: true })
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        return Swal.fire({
                            title: 'Success',
                            text: `Successfully Registered. ${data.name, data.email}`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });

                    }
                })

        }
    };


    return (
        <div>
            {/* <h1>Total user {users?.length}</h1> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {request.length !== 0 ? 
                        <tbody>
                            {
                                request.map((user, inx) => <tr key={user._id}>
                                    <th>{inx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td>{user?.role === 'admin' ? "Admin" : <button onClick={() => handleConfirm(user)} className="btn text-xl bg-[#bdcbf4]"><FaUsers /></button>}</td>
                                    {/* <td><button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-red-500 text-white">Delete</button></td> */}
                                </tr>)
                            }

                        </tbody> : <div className="text-4xl flex justify-center items-center"> <h1>NO DATA</h1> </div>
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageUser;