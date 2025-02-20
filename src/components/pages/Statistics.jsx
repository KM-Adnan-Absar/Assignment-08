import { ComposedChart, XAxis, YAxis, Tooltip, Legend, Bar, Area, Scatter, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    // Sample data for products with prices and ratings
    const data = [
        { name: 'Product A', price: 120, rating: 4.5 },
        { name: 'Product B', price: 80, rating: 3.9 },
        { name: 'Product C', price: 150, rating: 4.8 },
        { name: 'Product D', price: 200, rating: 4.2 },
        { name: 'Product E', price: 90, rating: 3.7 },
    ];

    return (
        <div>
            <h2>Product Price and Rating Statistics</h2>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Area chart for price */}
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    {/* Bar chart for price */}
                    <Bar dataKey="price" barSize={20} fill="#82ca9d" />
                    {/* Scatter plot for rating */}
                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
