
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true)
    const handleShow = () => {
        setShowMenu(!showMenu)
    }
    const menuItem = <div className='flex items-center'>
        <li className='font-poppins font-semibold text-sm text-[#474747]'><Link>Home</Link></li>
        <li className='font-poppins font-semibold text-sm text-[#474747]'><Link>Our Portfolio</Link></li>
        <li className='font-poppins font-semibold text-sm text-[#474747]'><Link>Our Team</Link></li>
        <li className='font-poppins font-semibold text-sm text-[#474747]'><Link>Contact Us</Link></li>
        <button className='font-poppins font-semibold text-sm py-2 px-10 bg-[#F63E7B] rounded-md text-[#FFF]'><Link>Login</Link></button>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button onClick={handleShow} tabIndex={0} className="btn btn-ghost lg:hidden">
                        {showMenu ? <FiMenu ></FiMenu> : <RxCross1></RxCross1>}
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   lg:hidden">
                            {!showMenu && menuItem}
                        </ul>
                    </div>
                    <a className="btn hidden lg:block btn-ghost normal-case text-xl w-[125px] ">
                        <img src="/src/assets/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;