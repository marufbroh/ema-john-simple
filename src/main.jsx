import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './components/Body/Order';
import OrderReview from './components/Body/OrderReview';
import ManageInventory from './components/Body/ManageInventory';
import Login from './components/Body/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Body/Checkout';
import SignUp from './components/Body/SignUp';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Order />,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: 'order-review',
        element: <OrderReview />,
        loader: cartProductsLoader
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
      },
      {
        path: 'manage-inventory',
        element: <ManageInventory />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProviders><RouterProvider router={router} /></AuthProviders>
  // </React.StrictMode>,
)
