import Home from "./landingPage/Home";
import Login from "./login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./login/NotFound";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import Dashboard from "./admin/Dashboard";
import User from "./admin/User";
import AddUser from "./admin/AddUser";
import DetailUser from "./admin/DetailUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboardNavbar" element={<DashboardNavbar />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/detail" element={<DetailUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
