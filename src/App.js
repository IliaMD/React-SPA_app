import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Bucket } from "./pages";
import "./assets/styles/fonts.css";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bucket" element={<Bucket />} />
      </Routes>
    </div>
  );
}

export default App;
