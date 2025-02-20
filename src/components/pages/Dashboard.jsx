import { useState } from "react";
import { useCart } from "../../context/CartContext"

const Dashboard = () => {
  const { cart, wishlist } = useCart();
  const [activeTab, setActiveTab] = useState("cart");
  const [sortedCart, setSortedCart] = useState([...cart]);

  // Calculate total price of cart items
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  // Sort cart items by price (descending order)
  const sortByPrice = () => {
    const sorted = [...cart].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setSortedCart(sorted);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-4 py-2 rounded-lg ${activeTab === "cart" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Cart
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-4 py-2 rounded-lg ${activeTab === "wishlist" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Wish List
        </button>
      </div>

      {activeTab === "cart" ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Cart Items ({cart.length})</h2>
            <button onClick={sortByPrice} className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Sort by Price ↓
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCart.map((item) => (
              <div key={item.product_id} className="border p-4 rounded-lg shadow">
                <img src={item.product_image} alt={item.product_title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mt-2">{item.product_title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-500">{item.brand}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-lg font-semibold">
            Total Price: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Wish List Items ({wishlist.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item.product_id} className="border p-4 rounded-lg shadow">
                <img src={item.product_image} alt={item.product_title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mt-2">{item.product_title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-500">{item.brand}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
