import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Frameworks from "./components/Frameworks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50/30">
      <NavBar />
      <Hero />
      <About />
      <Frameworks />
      <Features />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
