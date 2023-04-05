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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Order />
      },
      {
        path: 'order-review',
        element: <OrderReview />
      },
      {
        path: 'manage-inventory',
        element: <ManageInventory />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
