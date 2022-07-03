import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import { Roster } from "./pages/Roster";
import { MyPage } from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
