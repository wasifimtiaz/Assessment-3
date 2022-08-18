import React from "react";
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work";
// import Contact from "./components/contact/Contact";
// import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
  
    <div >
      <Topbar/>
      <Intro/>
      <Work/>
      <Projects/>
      <Footer/>
      {/* <div >
        
        <Portfolio/>
        <Testimonials/>
        <Work/>
        <Contact/>

      </div> */}
    </div>
  
  );
}

export default App;
