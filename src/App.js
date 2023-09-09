import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery1 from "./pages/Gallery";
import ArtPieceView from "./pages/ArtPieceView";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery1 />} />
          <Route path="image/:id" element={<ArtPieceView/>} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;