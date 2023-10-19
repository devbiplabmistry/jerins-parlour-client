import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";


const Addservice = () => {
    const { user } = useContext(AuthContext)
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="bg-orange-50 w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Add Service</h2>
                {/* Display the user's display name */}
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">
                    {user?.displayName}
                </h2>
            </nav>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-md border mt-12 mx-auto">
                <div className="card-body ">
                    <div className="form-control">
                        <input type="text" 
                            {...register("serviceTitle", { required: true })}
                            placeholder="Service Title" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        {errors.serviceTitle && (
                            <span className="font-inter font-medium text-xl text-red-600">
                              service title is required
                            </span>
                        )}

                    </div>
                  
                    <div className="form-control">
                        <input type="text" 
                            {...register("price", { required: true })}
                            placeholder="Price" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        {errors.price && (
                            <span className="font-inter font-medium text-xl text-red-600">
                              price is required
                            </span>
                        )}

                    </div>
                    <div className="form-control">
                        <input type="file" name="description"
                            {...register("img", { required: true })}
                            rows="15" cols="15" placeholder="Description" className="input input-bordered font-Montserrat font-medium text-base text-black p-2" />
                        {errors.img && (
                            <span className="font-inter font-medium text-xl text-red-600">
                               image is required
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <textarea type="text"
                            {...register("description", { required: true })}
                            placeholder="Description" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        {errors.description && (
                            <span className="font-inter font-medium text-xl text-red-600">
                                write some description
                            </span>
                        )}
                    </div>
                    <button type="submit" className='font-poppins w-40 font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Addservice;