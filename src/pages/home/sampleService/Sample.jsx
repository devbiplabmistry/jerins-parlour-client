

const Sample = () => {
    return (
        <div className="bg-orange-50 pt-32 pb-36">
            <div className="sample-wrapper flex  justify-center items-center gap-24">
                <div className="sample-img w-1/3">
                    <img src="/src/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png" alt="sample" />
                </div>
                <div className="sample-content w-1/3">
                    <h3 className="font-poppins mb-8 font-semibold text-3xl text-[#2D2D2D]">Let us handle your <br /> screen <span className="text-[#F63E7B]">Professionally</span>.</h3>
                    <p className="font-poppins font-light text-sm text-[#000]">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</p>
                    <div className="inner-sample-content-wrapper flex gap-8">
                        <div className="happy-client">
                            <h3 className="font-poppins font-bold text-4xl mt-16 mb-4 text-[#F63E7B]">500+</h3>
                            <p className="font-poppins font-normal text-sm text-[#000000]">Happy Customer</p>
                        </div>
                        <div className="total-service">
                            <h3 className="font-poppins font-bold text-4xl text-[#F63E7B] mt-16 mb-4">16+</h3>
                            <p className="font-poppins font-normal text-sm text-[#000000]">Total Service</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sample;