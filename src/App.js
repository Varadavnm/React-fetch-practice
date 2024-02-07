import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignUp from './components/loginSignUp/loginSignUp';
import Header from './components/loginSignUp/Header';
import Countries from './components/loginSignUp/Countries';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/header" element={<Header title="Groceries" />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
