//Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

//Pages
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/edusol-app" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
