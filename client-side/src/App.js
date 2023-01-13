import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Consult from "./pages/Consult";
import Messages from "./pages/Messages";


import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="home" element={<Landing />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="user" element={<SideBar/>} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="consult" element={<Consult />} />
          <Route path="messages" element={<Messages />} />
          
          <Route path="order" element={<Order />} />
          <Route path="saved" element={<Saved />} />
          <Route path="settings" element={<Setting />} />
          </Route>

          <Route path="*" element={<> not found</>} />
        </Routes>
      
    </Router>
  );
}

export default App;
