

const Banner = () => {
    return (
        <div>
            <div className="banner-wrapper flex items-center mt-11 gap-32">
                <div className="banner-content w-1/2">
                    <h1 className="font-poppins leading-[60px] font-bold text-5xl text-[#111430]">BEAUTY SALON <br />FOR EVERY WOMEN</h1>
                    <p className="font-poppins font-normal text-base text-[#666666] py-7">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                    <button className="font-poppins font-medium text-base text-[#fff] py-3 px-8 bg-[#F63E7B] rounded-md">Get an Appointment</button>
                </div>
                <div className="banner-img w-1/2">
                    <img src="/src/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;