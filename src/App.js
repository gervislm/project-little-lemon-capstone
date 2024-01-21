import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Main />
      </Router>
      ,
    </>
  );
}

export default App;
