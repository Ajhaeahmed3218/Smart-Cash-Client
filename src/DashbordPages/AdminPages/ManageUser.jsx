import { FaUsers } from "react-icons/fa";
import useAllRequest from "../../Hooks/useAllRequest";


const ManageUser = () => {
    const [request, refetch] = useAllRequest();
    console.log(request);
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
                            <th>Membership</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map((user, inx) => <tr key={user._id}>
                                <th>{inx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.rool}</td>
                                {/* <td>{user?.role === 'admin' ? "Admin" :<button onClick={() => handleMakeAdmin(user._id)} className="btn text-xl bg-[#bdcbf4]"><FaUsers /></button>}</td> */}
                                {/* <td><button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-red-500 text-white">Delete</button></td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;