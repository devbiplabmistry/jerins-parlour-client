import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import { useState } from "react";


const Services = () => {
    const [services] =useServices([])
    const [allService,setAllService]=useState(3)
    const handleAllService =()=>{
        setAllService(services.services.length)
    }
    return (
        <div className="mx-auto text-center pt-24 pb-16">
            <h2 className="font-poppins font-bold text-4xl text-[#111430] mb-16">Our Awesome <span className="text-[#F63E7B]">Services</span></h2>

            <div className="service-wrapper mx-auto text-center grid grid-cols-3 gap-5">
           {
             services.services?.slice(0,allService).map(item=><div key={item._id} className="card w-96 bg-base-100 shadow-xl">
             <figure className="w-16 mx-auto mt-9 mb-4"><img src="/src/assets/icons/Group 1372.png" alt="ladies" /></figure>
             <div className="card-body">
                 <h2 className=" font-poppins font-semibold  text-xl text-[#111430]">{item.serviceName}</h2>
                 <p className="font-poppins font-medium text-xl text-[#F63E7B]">{item.price}</p>
                 <p className="font-poppins font-light text-base text-[rgba(0,0,0,0.7)]">{item.description}</p>
             </div>
         </div>)
           }         
            </div>
            <button onClick={handleAllService} className='font-poppins inline-block mt-11 font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF]'>Explore More</button>

        </div>
    );
};

export default Services;