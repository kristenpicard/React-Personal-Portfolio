import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Navbar from "./components/Footer";
import Footer from "./components/Navbar";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
