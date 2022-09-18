import React from "react";
import "./App.css";

//Components
import NavBar from "./components/NavBar";
import MeduxCrud from "./components/MeduxCrud";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MeduxCrud />} />
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
