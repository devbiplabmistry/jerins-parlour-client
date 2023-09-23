
import { MdLocationPin } from 'react-icons/md';
import { AiFillFacebook,AiFillLinkedin,AiOutlineYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#F63E7B] text-base-content">
            <aside className='flex gap-4'>
                <MdLocationPin className='text-2xl text-white'></MdLocationPin>
                <p className='font-poppins font-medium text-base text-[#fff]'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="font-poppins font-semibold text-xl text-white">Company</header>
                <Link className="font-poppins font-normal text-base text-white">About</Link>
                <Link className="font-poppins font-normal text-base text-white">Project</Link>
                <Link className="font-poppins font-normal text-base text-white">Our Team</Link>
                <Link className="font-poppins font-normal text-base text-white">Terms Conditions</Link>
                <Link className="font-poppins font-normal text-base text-white">Submit Listing</Link>
            </nav>
            <nav>
                <header className="font-poppins font-semibold text-xl text-white">Quick Links</header>
                <Link className="font-poppins font-normal text-base text-white">Quick Links</Link>
                <Link className="font-poppins font-normal text-base text-white">Rentals</Link>
                <Link className="font-poppins font-normal text-base text-white">Sales</Link>
                <Link className="font-poppins font-normal text-base text-white">Contact</Link>
                <Link className="font-poppins font-normal text-base text-white">Our blog</Link>
            </nav>
            <nav>
                <header className="font-poppins font-semibold text-xl text-white">About Us</header>
                <p className="font-poppins font-normal text-base text-white">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Purus commodo ipsum <br />
                    duis laoreet maecenas. Feugiat
                </p>
                <div className="icon-wrapper flex gap-4">
                    <AiFillFacebook className='text-xl text-white'/>
                    <BsInstagram className='text-xl text-white'/>
                    <AiFillLinkedin className='text-xl text-white'/>
                    <AiOutlineYoutube className='text-xl text-white'/>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;