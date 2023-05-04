import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Addemp from "./components/Addemp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="fakenav"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addemp" element={<Addemp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
