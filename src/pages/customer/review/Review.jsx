import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";
import { clear } from "localforage";
import Swal from "sweetalert2";


const Review = () => {
    const { user } = useContext(AuthContext)
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/reviews',{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                clear()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your review is successfully submitted',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };
    return (
        <div className="w-full">
            <div className="bg-orange-50  w-full pt-12 ps-10 pb-40">
                <nav className="flex justify-around">
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Review</h2>
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">{user?.displayName}</h2>
                </nav>
                <div className="hero-content  text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-md border">
                        <div className="card-body ">
                            <div className="form-control">
                                <input type="text" defaultValue={user?.displayName}
                                    {...register("displayName", { required: true })}
                                    placeholder="Your name" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                                {errors.displayName && (
                                    <span className="font-inter font-medium text-xl text-red-600">
                                        First Name is required
                                    </span>
                                )}

                            </div>
                            <div className="form-control">
                                <input type="text"
                                    {...register("designation", { required: true })}
                                    placeholder="Company's name designation" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                                {errors.designation && (
                                    <span className="font-inter font-medium text-xl text-red-600">
                                    company name & designation
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <textarea name="description"
                                    {...register("description", { required: true })}
                                    rows="15" cols="15" placeholder="Description" className="input input-bordered font-Montserrat font-medium text-base text-black p-2" />
                                {errors.description && (
                                    <span className="font-inter font-medium text-xl text-red-600">
                                      write Description
                                    </span>
                                )}
                            </div>
                            <button type="submit" className='font-poppins w-40 font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Review;