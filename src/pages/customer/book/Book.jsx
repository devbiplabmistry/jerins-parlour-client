import { useContext, useState } from "react";
import { AuthContext } from "../../providers/authProvider";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Book = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, setValue, reset,errors } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                reset()
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your booking is processing !!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div className="bg-orange-50 w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Book</h2>
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">
                    {user?.displayName}
                </h2>
            </nav>
            <div className="hero-content text-center">
                <form
                    className="card flex-shrink-0 w-full max-w-md border"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("displayName", { required: true })}
                                value={user?.displayName}
                                onChange={(e) => setValue("displayName", e.target.value)}
                                className="input input-bordered font-Montserrat font-medium text-base text-black"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("email", { required: true })}
                                value={user?.email}
                                onChange={(e) => setValue("email", e.target.value)}
                                className="input input-bordered font-Montserrat font-medium text-base text-black"
                            />
                        </div>
                        <div className="form-control">
                            <select
                                name="serviceName"
                                {...register("serviceName", { required: true })}
                             
                                className="rounded-2xl p-4"
                                onChange={(e) => {
                                    const selectedServiceName = e.target.value;
                                    const selectedService = services.find((service) => service.serviceName === selectedServiceName);
                                    setSelectedService(selectedService?.price || 0);
                                }}
                            >
                                {services.map((item) =>
                                    <option key={item._id}>
                                        {item?.serviceName}
        
                                    </option>

                                )
                                }
                            </select>
                        </div>
                        <div className="pay-wrapper flex justify-between items-center">
                            <h3 className="font-Montserrat font-medium text-black text-base">
                                Your service charge will be: {selectedService}
                            </h3>
                            
                         { selectedService != 0 &&  <button
                                type="submit"
                                className="font-poppins font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4"
                            >
                                pay
                            </button>
                            }
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Book;
