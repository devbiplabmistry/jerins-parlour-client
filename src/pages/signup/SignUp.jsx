import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
    <div className="mt-16">
        <h2 className="font-Montserrat text-center font-bold text-2xl text-[#000000]">Create an account</h2>
        <div className="hero-content  text-center">
                <div className="card flex-shrink-0 w-full max-w-md border">
                    <div className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-Montserrat font-medium text-base text-black">First name</span>
                            </label>
                            <input type="text" placeholder="First Name" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-Montserrat font-medium text-base text-black">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-Montserrat font-medium text-base text-black">User Name or email</span>
                            </label>
                            <input type="text" placeholder="user name" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-Montserrat  font-medium text-base text-black">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered font-Montserrat  font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-Montserrat  font-medium text-base text-black">Confirm password</span>
                            </label>
                            <input type="text" placeholder="confirm password" className="input input-bordered font-Montserrat  font-medium text-base text-black" /> 
                        </div>
                        <button type="submit" className='font-poppins font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4'>Create an account</button>

                        <p className="font-Montserrat font-medium text-base text-[#000000]">Already have an account ? <Link><span className="text-[#F63E7B]">Login</span></Link></p>
                    </div>
                <div className="divider text-center">OR</div>
                <p className='flex gap-4 border rounded-3xl p-2 justify-evenly mx-auto font-Montserrat font-medium text-base text-black items-center max-w-sm'><BsGoogle ></BsGoogle>Continue with Google</p>
                </div>
            </div>
    </div>
    );
};

export default SignUp;