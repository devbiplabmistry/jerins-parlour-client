import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const {user}=useContext(AuthContext)
    const {
        handleSubmit,
        register,
        reset
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset()
        
    }
    return (
        <div className="bg-orange-50  w-full pt-12 ps-10 pb-40">
              <nav className="flex justify-around">
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Make Admin</h2>
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">{user?.displayName}</h2>
                </nav>
                <form onSubmit={handleSubmit(onSubmit)} className="admin flex justify-center items-center gap-4 my-8">
                   <div> <label className="block font-poppins mb-3 font-semibold text-sm ">Email</label>
                    <input  type="email" name="email" id=""   {...register("email", { required: true })} placeholder="example@gmail.com" className="px-2 py-2 block font-poppins  font-semibold text-sm " />
                    </div>
                    <button type="submit" className='font-poppins  font-semibold text-sm py-2 px-2 bg-[#F63E7B] rounded-md text-[#FFF] mt-8'>Submit</button>

                </form>
        </div>
    );
};

export default MakeAdmin;