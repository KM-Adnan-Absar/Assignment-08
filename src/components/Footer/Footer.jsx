
const Footer = () => {
  return (
    <div>
      <footer className="border bg-white">
       <div className="text-center mt-10 space-y-2">
        <h2 className="text-xl font-bold">Gadget Heaven</h2>
        <p className="text-sm text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
       </div>

       <div className="border border-gray-400 bottom-1 mt-8 w-3/4 ml-40 ">
        
       </div>
<div className="grid grid-cols-3 ml-8 mt-8">

<div className=" text-center">
  <h2 className="text-xl font-bold">Services</h2>

  <div className="space-y-2 mt-3">
  
    <p>Product Support</p>           
    <p>Order Tracking</p>
    <p>Shipping & Delivery</p>
    <p>Returns</p>
  </div>
</div>
<div className=" text-center">
  <h2 className="text-xl font-bold">Company</h2>
  <div className="space-y-2 mt-3">
    <p>About Us</p>
    <p>Careers</p>
    <p>Contact</p>
  </div>
</div>

<div className=" text-center">
  <h2 className="text-xl font-bold">Legal</h2>
  <div className="space-y-2 mt-3" >
    <p> Terms of Service</p>
    <p>Privacy Policy</p>
    <p>Cookie Policy</p>
  </div>
</div>
</div>




      </footer>
    </div>
  );
};

export default Footer;

