import React from "react";

import { Routes, Route } from "react-router";

import UserPage from "./Pages/UserPage";
import HomePage from "./Pages/HomePage";
import ToDoPage from "./Pages/ToDoPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/todo" element={<ToDoPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
