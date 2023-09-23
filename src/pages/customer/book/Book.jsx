

const Book = () => {
    return (
        <div className="bg-orange-50  w-full pt-12 ps-10 pb-40">
            <nav className="flex justify-around">
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">Book</h2>
                <h2 className="font-poppins font-medium text-2xl text-[#0C0C0C]">User name</h2>
            </nav>
            <div className="hero-content  text-center">
                <div className="card flex-shrink-0 w-full max-w-md border">
                    <div className="card-body ">
                        <div className="form-control">
                            <input type="text"  className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            <input type="text"  className="input input-bordered font-Montserrat font-medium text-base text-black" />
                        </div>
                        <div className="form-control">
                            {/* <input type="text" " /> */}
                            <select name="" id="" className="rounded-2xl p-4">
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Please select your service</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
                                <option value=""><p  className="input input-bordered font-Montserrat font-medium text-base text-black">Anti Face Treatment</p></option>
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