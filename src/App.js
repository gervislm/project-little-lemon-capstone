import "./App.css";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
