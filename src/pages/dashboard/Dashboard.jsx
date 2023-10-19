import { AiOutlineLock, AiOutlineMessage, AiOutlineShoppingCart ,AiOutlinePlus} from "react-icons/ai";
import { BsFillPersonPlusFill} from "react-icons/bs";
import { MdOutlineManageSearch} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/icons/logo.png'

const Dashboard = () => {
    const admin =false;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {<Outlet></Outlet>}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
             {admin &&    <div className="drawer-side bg-yellow-300">
                    <img className="w-28 mt-10 ms-6" src={logo} alt="" />
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/book" activeClassName="active-link">
                                <AiOutlineShoppingCart /> Book
                            </NavLink>
                        </li>
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/booking-list" activeClassName="active-link">
                                <AiOutlineLock /> Booking List
                            </NavLink>
                        </li>
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/review" activeClassName="active-link">
                                <AiOutlineMessage /> Review
                            </NavLink>
                        </li>
                    </ul>
                </div>
                }
                   <div className="drawer-side bg-yellow-300">
                    <img className="w-28 mt-10 ms-6" src={logo} alt="" />
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/orderList" activeClassName="active-link">
                                <AiOutlineShoppingCart /> Order List
                            </NavLink>
                        </li>
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/booking-list" activeClassName="active-link">
                                <AiOutlinePlus /> Add Service
                            </NavLink>
                        </li>
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/review" activeClassName="active-link">
                                <BsFillPersonPlusFill /> Make Admin
                            </NavLink>
                        </li>
                        <li className="font-poppins font-medium text-base text-[#878787]">
                            <NavLink to="/dashboard/review" activeClassName="active-link">
                                <MdOutlineManageSearch /> Manage Service
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
