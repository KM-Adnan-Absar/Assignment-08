const About = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#9538E2]">About GadgetHaven</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your one-stop destination for the latest and most innovative tech gadgets. We bring you 
            high-quality products to upgrade your digital lifestyle.
          </p>
        </div>
  
        {/* Our Mission Section */}
        <div className="mt-12 bg-[#F5F3FF] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#7C3AED]">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            At <span className="font-semibold">GadgetHaven</span>, we strive to deliver cutting-edge 
            technology at competitive prices, ensuring an exceptional shopping experience.
          </p>
        </div>
  
        {/* Why Choose Us Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#7C3AED]">Why Choose Us?</h2>
          <ul className="list-none space-y-3 mt-4">
            <li className="flex items-center gap-2">
              ✅ <span>Wide range of gadgets and accessories</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>High-quality and reliable products</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Secure payment options</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>24/7 customer support</span>
            </li>
          </ul>
        </div>
  
        {/* Meet Our Team Section */}
        <div className="mt-10 bg-[#F5F3FF] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-[#7C3AED]">Meet Our Team</h2>
          <p className="text-gray-700 mt-2">
            We are a passionate team of tech enthusiasts and developers, dedicated to bringing 
            you the best gadgets in the market.
          </p>
        </div>
  
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-[#7C3AED]">Join Us on Our Journey!</h3>
          <p className="text-gray-600 mt-2">
            Be a part of the tech revolution. Stay updated with the latest trends and gadgets.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#9538E2] text-white font-bold rounded-lg hover:bg-[#7C3AED] transition">
            Explore Products
          </button>
        </div>
      </div>
    );
  };
  
  export default About;
  