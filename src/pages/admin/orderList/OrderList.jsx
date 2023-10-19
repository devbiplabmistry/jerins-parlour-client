import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProvider";

const OrderList = () => {
    // Get the user object from the AuthContext
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(result => {
                setBookings(result)
            })
    }, [])

    const handleStatus = () => {

    }

    return (
        <div className="bg-orange-50 w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Order List</h2>
                {/* Display the user's display name */}
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">
                    {user?.displayName}
                </h2>
            </nav>

            <div className="order-list mt-12">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="font-poppins text-base font-normal text-[#686868]">Name</th>
                                <th className="font-poppins text-base font-normal text-[#686868]">Email Id</th>
                                <th className="font-poppins text-base font-normal text-[#686868]">Service</th>
                                <th className="font-poppins text-base font-normal text-[#686868]">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((item, index) => <tr key={item._id}>
                                <th className="font-poppins text-base font-normal text-[#000]">{index + 1}</th>
                                <td className="font-poppins text-base font-normal text-[#000]">{item?.displayName}</td>
                                <td className="font-poppins text-base font-normal text-[#000]">{item?.email}</td>
                                <td className="font-poppins text-base font-normal text-[#000]">{item?.serviceName}</td>
                                <td className="font-poppins text-base font-normal text-[red]"><button onClick={handleStatus}>{item?.status}</button></td>

                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
