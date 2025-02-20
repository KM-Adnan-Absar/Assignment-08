import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/root/root.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home.jsx';
import Statistics from './components/pages/statistics.jsx';
import Dashboard from './components/pages/dashboard.jsx';
import DataDetails from './components/DataDetails/DataDetails.jsx';
import { CartProvider } from './context/CartContext.jsx';
import About from './components/pages/About.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        loader: () => fetch('data.json'),
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/data/:id',
        loader:({params}) => fetch(`data.json/${params.id}`),
         element:<DataDetails> </DataDetails>   
    },
    {
      path: '/about',
      element: <About></About>
    }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* ✅ Wrap with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
