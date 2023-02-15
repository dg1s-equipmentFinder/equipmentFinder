import '../App.css';
import React, {useState, useEffect} from 'react';
import Lab from '../routes/lab.js'
import Explain from '../routes/explain.js'
import Map from '../routes/schoolmap.js'
import Search from '../routes/search.js'
import Credit from '../routes/credit.js';
import Closet from '../routes/closet.js'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/"  element={<Map />} />
          <Route path="/map"  element={<Map />} />
          <Route path="/credit"  element={<Credit />} />
          <Route path="/search"  element={<Search />} />
          <Route path="/lab/"  element={<Lab />} />
          <Route path="/closet"  element={<Closet />} />
          <Route path="/explain"  element={<Explain />} />
        </Routes>
      </Router>
    )
  }

export default AppRouter