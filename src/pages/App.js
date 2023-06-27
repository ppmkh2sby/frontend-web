import Home from "./landingPage/Home";
import Login from "./login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./login/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
