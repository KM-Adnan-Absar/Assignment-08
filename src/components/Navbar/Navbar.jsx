import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import BannerImg from '../../assets/banner.jpg'

const Navbar = () => {
const links = <>
<div className="text-white flex items-center ">
<li><Link to = '/'>Home</Link></li>
  <li><Link to ='/statistics' >Statistics</Link></li>
  <li><Link to = '/dashboard' >Dashboard</Link></li>
</div>
 
</>

    return (
 
    <div>
             
  <div className="flex-col bg-[#9538E2] border rounded-lg h-96 ">
    <div className="navbar max-w-[880px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
     </ul>
  </div>
  <div className="navbar-end gap-2">
  <AiOutlineShoppingCart className="border border-gray-500 rounded-full text-xl w-8 h-8 p-1 bg-white"></AiOutlineShoppingCart>
  <CiHeart className="border border-gray-500 rounded-full text-xl w-8 h-8 p-1 bg-white"></CiHeart>
  </div>

</div>
<div>
            <div className="text-center space-y-4 mt-6">
        <h2 className="text-3xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
        <p className="text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
        <button className="border rounded-3xl bg-white p-2 text-[#9538E2] font-bold ">Shop Now </button>
       
      </div>
      
        </div>
        
</div>

<div className='-mt-16 
        border border-white border-2 bg-[#FFFFFF4D] rounded-xl mx-auto p-3 w-[650px] h-[350px]  '> 
        <img className="w-[650px] h-[325px] rounded-md" src={BannerImg} alt="" />
      </div>
    </div>
      

    );
};

export default Navbar;