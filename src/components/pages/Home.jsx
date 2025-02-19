import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Data from "../Data/Data";

const Home = () => {
    const datas = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    // Filter data based on selected category
    const filteredData = selectedCategory === "All Products"
        ? datas
        : datas.filter((data) => data.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-xl font-bold text-center mt-4">
                Explore Cutting-Edge Gadgets
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
                {/* Sidebar for Categories */}
                <div className="border border-white rounded-md bg-white p-4 w-full md:w-1/4">
                    <h2
                        className={`border rounded-full p-2 text-sm font-bold text-center cursor-pointer ${
                            selectedCategory === "All Products" ? "bg-[#9538E2] text-white" : "bg-gray-200 text-black"
                        }`}
                        onClick={() => setSelectedCategory("All Products")}
                    >
                        All Products
                    </h2>

                    <div className="space-y-3 mt-4">
                        {["Laptop", "Phones", "Accessories", "SmartWatch", "MacBook", "Iphone"].map((category) => (
                            <button
                                key={category}
                                className={`border rounded-full p-2 w-full font-semibold cursor-pointer ${
                                    selectedCategory === category ? "bg-[#9538E2] text-white" : "bg-gray-200 text-black"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gadgets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {filteredData.length > 0 ? (
                        filteredData.map((data, index) => <Data key={index} data={data} />)
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
