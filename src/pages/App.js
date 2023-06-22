import Navbar from "../components/Navbar";
import About from "./landingPage/About";
import Activities from "./landingPage/Activities";
import Home from "./landingPage/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Activities />
    </>
  );
}

export default App;
