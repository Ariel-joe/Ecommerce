import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const backendUrl = import.meta.env.VITE_BACKENDURL

export const currency = 'Ksh. '

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'): '');

  useEffect(()=> {
    localStorage.setItem("token", token)
  }, [token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />

          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-20px sm:ml-3vw my-4 text-gray-800 text-base">
              <Routes>
                <Route path="/dashboard" element={<Add token={token} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="/payments" element={<Orders token={token} />} />
                <Route path="/notifications" element={<Orders token={token} />} />
                <Route path="/customers" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
