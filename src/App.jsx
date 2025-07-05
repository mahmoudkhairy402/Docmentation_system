import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  useEffect(() => {
    document.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
