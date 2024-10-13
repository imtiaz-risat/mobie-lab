import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import Profile from "./pages/Profile";
import TagSelector from "./components/TagSelector";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/tags" element={<TagSelector />} />
      </Routes>
    </Router>
  );
};

export default App;
