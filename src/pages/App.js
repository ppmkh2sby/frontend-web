import Home from "./landingPage/Home";
import Login from "./login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./login/NotFound";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import Dashboard from "./admin/Dashboard";
import User from "./admin/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboardNavbar" element={<DashboardNavbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/user" element={<User />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
