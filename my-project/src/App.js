// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard'
import ComplaintForm from "./components/ComplaintForm";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
// import chatList from "./components/chatList.jsx";
import { GoogleLogin } from '@react-oauth/google';
import Cards from "./components/Cards";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  return (
    <Router>
      <div className="App">

      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<Header />} />
          {/* <LoginPage /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fill_complain" element={<ComplaintForm />} />

          {/* <Route path="/chat" element={<chatList />} /> */}

          {/* <classList /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FeedbackForm />
        <Cards />
        <LoginPage />
      </div>
    </Router>
  );
}

export default App;