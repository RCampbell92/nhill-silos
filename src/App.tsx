import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import "./css/main.css";
import NavButton from "./components/NavButton";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="title">
        <img src="/img/logo_green.png"></img>Nhill Silos
      </h1>
      <Nav />
      <div className="content">
        <Welcome />
        <About />
        <Products />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
