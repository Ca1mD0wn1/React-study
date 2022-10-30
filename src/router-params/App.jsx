import React from "react";
import { Route, Routes } from "react-router-dom";
import From from "./From-class";
import To from "./To-class";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<From />} />
      <Route path="/to" element={<To />} />
    </Routes>
  );
};

export default App;
