import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
