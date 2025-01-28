import { useLoaderData } from "react-router-dom";


const DataDetails = () => {

    const viewDetails = useLoaderData()
    const {name,price} = viewDetails

    return (
        <div>
            <h2>Name:{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default DataDetails;