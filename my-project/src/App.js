// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComplaintForm from "./components/ComplaintForm";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import NoPage from "./components/NoPage";
import ProfilePage from "./components/ProfilePage";
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fill_complain" element={<ComplaintForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
