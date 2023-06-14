import Navbar from "../components/Navbar";
import ppm from '../assets/image/ppm.jpg';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-100 w-full h-screen"
        style={{
          backgroundImage: `url(${ppm})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
    </>
  );
}

export default App;
