import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
