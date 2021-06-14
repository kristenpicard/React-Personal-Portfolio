import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
