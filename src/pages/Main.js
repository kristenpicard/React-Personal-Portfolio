import React from "react";
import Bio from "../components/Bio";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Links from "../components/Links";
import Contact from "../components/Contact";

function Main() {
  return (
    <div>
      <Header />
      <Bio />
      <Skills />
      <Links />
      <Contact />
    </div>
  );
}

export default Main;
