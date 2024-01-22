import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Main />
      </Router>
      <Menu />
      <Footer />
    </>
  );
}

export default App;
