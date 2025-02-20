import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import products from "../../../public/data.json"; // Import JSON data

const DataDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((p) => p.product_id === Number(id)); // Find product by ID

  if (!product) {
    return <div className="text-center text-red-500 font-bold mt-10">Product not found</div>;
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        {/* Product Image */}
        <img src={product.product_image} alt={product.product_title} className="w-full h-auto object-cover rounded-lg" />

        {/* Product Info */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{product.product_title}</h2>
          <p className="text-xl text-[#9538E2] font-semibold mt-2">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Specifications */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Specifications:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              {product.Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* "Add to Cart" Button */}
          <button className="mt-6 flex items-center gap-2 bg-[#9538E2] text-white py-2 px-4 rounded-lg hover:bg-[#7c2ddc]">
            <AiOutlineShoppingCart className="text-lg" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataDetails;
