import './App.css';
import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Home from "./pages/About"
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
