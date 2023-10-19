import { useContext, useState } from "react";
import { AuthContext } from "../../providers/authProvider";


const Book = () => {
    const [services, setServices] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user);
    fetch('http://localhost:5000/services')

        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    return (
        <div className="bg-orange-50  w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Book</h2>
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">{user?.displayName}</h2>
            </nav>
            <div className="hero-content  text-center">
                <div className="card flex-shrink-0 w-full max-w-md border">
                    <div className="card-body ">
                        <div className="form-control">
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <input type="text" defaultValue={user?.email} className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                        <select name="" id="" className="rounded-2xl p-4">
                            {
                                services.map(item=> <option key={item._id} value={item.serviceName}><p className="input input-bordered font-Montserrat font-medium text-base text-black">{item?.serviceName}</p></option>)
                            } 
                                </select>

                        </div>
                        <div className="pay-wrapper flex justify-between items-center">
                            <h3 className="font-Montserrat font-medium text-black text-base">Your service charge will be :</h3>
                            <button type="submit" className='font-poppins font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4'>Pay</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Book;