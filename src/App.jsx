import React from 'react';
import Home from "./Components/HomePage/Home";
import Search from "./Components/Search/Search";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/EventsPage/Events";
import Login from "./Components/Login/Login";
import Members from "./Components/Members/Members";
import Newsletter from "./Components/Newsletter/Newsletter";

import Navbar from "./Components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<Members />} />
        <Route path="/newsletter" element={<Newsletter />} />
        {/* <Route path="*" element={<Redirect to="/" />} /> */}
      </Routes>
    </>
  );
};

export default App;
