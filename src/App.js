import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
