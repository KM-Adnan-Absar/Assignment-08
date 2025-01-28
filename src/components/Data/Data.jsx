import { Link } from "react-router-dom";
const Data = ({data}) => {

    const {product_id,product_image,product_title,price} = data

    return (
      
     <div>
       
            <div className="border rounded-lg bg-white w-[220px] 
          h-[330px] p-4 " >
            <img className="w-[200px] h-[150px] border rounded-lg mx-auto mt-4 " src={product_image} alt="" />
            <div className="mt-4 ml-2 space-y-2">
            <h2 className="text-sm font-bold">{product_title}</h2>
            <p className="text-base text-gray-500">Price:{price}</p>
            <button className="border border-[#9538E2] rounded-full p-2 text-sm font-bold text-[#9538E2]">

                <Link to= {`/data/${product_id}`} >View details</Link></button>
            </div>
            
        </div>
        
     </div>
       
    );
};

export default Data;