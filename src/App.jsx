import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <div className="bg-base-200">
      <NavBar />
      <Hero />
      {/* <LogoClouds />
      <Services />
      <Testimonial />
      <Team /> */}
      <Contact />
    </div>
  )
}

export default App
