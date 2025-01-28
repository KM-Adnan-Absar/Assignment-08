import { useLoaderData } from "react-router-dom";
import Data from "../Data/Data";


const Home = () => {
    const datas = useLoaderData()



    return (


        <div>
            <div>
                <h2 className="text-xl font-bold text-center mt-12">
                    Explore Cutting-Edge Gadgets
                </h2>
            </div>

            <div className="flex items-center ">
                <div className="border border-white rounded-md w-[150px] h-[310px] bg-white text-center ml-4 -mt-52 ">

                    <h2 className="border rounded-full bg-[#9538E2] text-white p-1 w-[80%] mx-auto mt-3 text-sm font-bold" > All Products</h2>
                    <div className="space-y-3 mt-4">
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold" >Laptop</button><br />
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold">Phones</button><br />
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold">Accessories</button><br />
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold">SmartWatch</button><br />
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold">MacBook</button><br />
                        <button className="border rounded-full bg-gray-200 text-black p-1 text-sm w-[80%] font-semibold">Iphone</button><br />
                    </div>

                </div>
                <div className="grid grid-cols-3 gap-4 mt-12 ml-24 w-[55%] mx-auto ">

                    {
                        datas.map((data, index) => <Data key={index} data={data}> </Data>)

                    }

                </div>

            </div>

 
        </div>
    );
};


export default Home;