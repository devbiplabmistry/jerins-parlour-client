import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const Main = () => {
    const location =useLocation()
    const noHeader =location.pathname=="/login"
    const noFooter =location.pathname=="/signUp"
    return (
        <div>
          { noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
         {noHeader || noFooter ||    <Footer></Footer> }
            
        </div>
    );
};

export default Main;