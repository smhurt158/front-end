import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery1 from "./pages/Gallery";
function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery1 />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;