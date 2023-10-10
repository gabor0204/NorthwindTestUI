import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import QueryCollection from './query-collection/QueryCollection';
import Products from './products/Products';
import Suppliers from './suppliers/Suppliers';
import Home from './home/Home';

const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "supplierordersum",
                element: <Suppliers />,
            },
            {
                path: "querycollection",
                element: <QueryCollection />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
