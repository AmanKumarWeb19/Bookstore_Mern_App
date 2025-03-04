import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/register"/>} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
