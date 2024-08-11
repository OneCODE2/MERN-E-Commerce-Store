import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "./axiosInstance";

const App = () => {
  useEffect(() => {
    // Example GET request to the Vercel backend
   axiosInstance.get('/api/products')
  .then(response => {
    console.log('Products:', response.data);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
  }, []);

  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
