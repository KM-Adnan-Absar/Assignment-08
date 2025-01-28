import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-slate-100">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <div className="min-h-[calc(100vh-408px)]"></div>
           
           <Footer></Footer>
        </div>
    );
};

export default Root;