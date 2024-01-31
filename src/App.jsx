import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./components/Home/Home.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";
import Register from "./views/Register.jsx";

export default function App() {

  return (
      <Router>
          {/*nawigacja*/}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
          </Routes>
      </Router>
  )
}

