import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemRoot from './routes/item';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path:'/category/:category',
    element: <Root />,
  },
  {
    path: '/item/:id',
    element: <ItemRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
