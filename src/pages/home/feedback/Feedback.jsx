

const Feedback = () => {
    return (
        <div className="bg-orange-50">
            <h3 className="font-poppins font-bold text-4xl text-center pt-20 pb-10" >Let us handle your <br />
                project, professionally.</h3>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-md">
                    <form className="card-body">
                        <div className="wrapper grid grid-cols-2 gap-5">
                            <div className="form-control flex ">
                                <input type="text" placeholder="Full Name" className="input input-bordered font-poppins font-normal text-base text-[#707070]" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Last Name" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="wrapper grid grid-cols-2 gap-5">
                            <div className="form-control flex ">
                                <input type="email" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone Number" className="input input-bordered" />
                            </div>
                        </div>
                        <textarea className="p-4 font-poppins font-normal text-base text-[#707070]" name="message" id="" cols="5" rows="3" placeholder="your message "></textarea>

                        <button type="submit" className='font-poppins  font-semibold text-sm py-2 px-2 mx-auto mt-6 bg-[#F63E7B] rounded-md text-[#FFF] inline-block w-32'>Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Feedback;