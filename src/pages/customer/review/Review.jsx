

const Review = () => {
    return (
        <div className="w-full">
            <div className="bg-orange-50  w-full pt-12 ps-10 pb-40">
                <nav className="flex justify-around">
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Review</h2>
                    <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">User name</h2>
                </nav>
                <div className="hero-content  text-center">
                    <div className="card flex-shrink-0 w-full max-w-md border">
                        <div className="card-body ">
                            <div className="form-control">
                                <input type="text" placeholder="Your name" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Company's name designation" className="input input-bordered font-Montserrat font-medium text-base text-black" />
                            </div>
                            <div className="form-control">
                                <textarea name="description" rows="15" cols="15" placeholder="Description" className="input input-bordered font-Montserrat font-medium text-base text-black p-2" />
                            </div>
                                <button type="submit" className='font-poppins w-40 font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF] mt-6 mb-4'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Review;