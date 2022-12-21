import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  /*
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/pricing":
      component = <Pricing />
      break
    case "/about":
      component = <About />
      break
  }
  */
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
