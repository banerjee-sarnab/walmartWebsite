import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cards, setCards] = useState([]);

  
  return (
    <Router>
      <Navbar setCards={setCards} />
      <Routes>
        <Route path="/" element={<Home cards={cards} setCards={setCards}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
