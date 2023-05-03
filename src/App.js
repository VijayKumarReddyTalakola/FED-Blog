import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Event from "./components/Event";
import Sidebar from "./components/Sidebar";
import FuncComp from "./components/FuncComp";
import DashBoard from "./pages/DashBoard";
import PortFolio from "./pages/PortFolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<DashBoard />} />
          <Route path="/portfolio" exact element={<PortFolio />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/funccomp" exact element={<FuncComp />} />
          <Route path="/event" exact element={<Event />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
