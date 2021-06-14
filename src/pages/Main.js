import React from "react";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Links from "../components/Links";
import Skills from "../components/Skills";

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
