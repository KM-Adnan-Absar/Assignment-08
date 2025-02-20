import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import BannerImg from '../../assets/banner.jpg'
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const links = <>
<div className="text-white flex items-center gap-4 ">
<li><Link to = '/'>Home</Link></li>
  <li><Link to ='/statistics' >Statistics</Link></li>
  <li><Link to = '/dashboard' >Dashboard</Link></li>
  <li><Link to="/about">About Us</Link></li>
</div>
 
</>

    return (
 
    <div>
             
             <div className="bg-[#9538E2] border rounded-lg pb-12">
        {/* Navbar */}
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <Link to="/" className="text-xl text-white font-bold">Gadget Heaven</Link>
          </div>
          <ul className="hidden lg:flex gap-6 text-white">{links}</ul>
          <div className="flex gap-2">
            <AiOutlineShoppingCart className="border border-gray-500 rounded-full text-xl w-8 h-8 p-1 bg-white" />
            <CiHeart className="border border-gray-500 rounded-full text-xl w-8 h-8 p-1 bg-white" />
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col  items-center bg-[#9538E2] text-white  py-2">{links}</ul>
        )}

<div>
<div className="text-center px-4 lg:px-0 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          Upgrade Your Tech Accessories <br className="hidden md:block" /> with Gadget Heaven
        </h2>
        <p className="text-sm md:text-base text-white mt-2">
          Explore the latest gadgets that will take your experience to the next level. <br className="hidden md:block" />
          From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-[#9538E2] font-bold rounded-full hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
      
        </div>
        
</div>

<div className="relative flex justify-center -mt-8 px-4">
        <div className="border-4 border-white bg-[#FFFFFF4D] rounded-xl p-2 sm:p-3 w-full max-w-[90%] sm:max-w-[650px]">
          <img className="w-full h-auto rounded-md" src={BannerImg} alt="Gadget Banner" />
        </div>
      </div>
    </div>
      

    );
};

export default Navbar;