import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProvider";


const ManageServices = () => {
    // Get the user object from the AuthContext
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(result => {
                setServices(result)
            })
    }, [])



    return (
        <div className="bg-orange-50 w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Manage Services</h2>
                {/* Display the user's display name */}
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">
                    {user?.displayName}
                </h2>
            </nav>

            <div className="manage-service mt-12">
                {services.length}
               
            </div>
        </div>
    );
};

export default ManageServices;
