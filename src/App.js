import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "../src/components/Header";
import AllCookies from "./pages/AllCookies";
import CookieDogTeam from "./pages/CookieDogTeam";
import Prologue from "./pages/Prologue";
import CookieDetail from "./pages/CookieDetail";
import CandyShop from "./pages/CandyShop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicBottomBar from "../src/components/MusicBottomBar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [max, setMax] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home open={openModal} setMax={setMax} />}
          ></Route>
          <Route path="/allCookies/*" element={<AllCookies />}></Route>
          <Route path="/cookieDogTeam/*" element={<CookieDogTeam />}></Route>
          <Route path="/prologue/*" element={<Prologue />}></Route>
          <Route path="/cookieDetail/*" element={<CookieDetail />}></Route>
          <Route path="/candyShop/*" element={<CandyShop />}></Route>
        </Routes>
        <MusicBottomBar start={modalOpen} stop={closeModal} max={max} />
      </Router>
    </div>
  );
}

export default App;
