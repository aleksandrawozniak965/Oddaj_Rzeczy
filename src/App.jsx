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
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
          </Routes>
      </Router>
  )
}


// Home – Organizations (/)
// Home – Local (/)
// Home – Logged In (/)
// Form - Step 1 (/oddaj-rzeczy)
// Form - Step 2 (/oddaj-rzeczy)
// Form - Step 2 - Opened Select (/oddaj-rzeczy)
// Form - Step 3 (/oddaj-rzeczy)
// Form - Step 3 - Opened Select (/oddaj-rzeczy)
// Form - Step 4 (/oddaj-rzeczy)
// Form - Summary (/oddaj-rzeczy)
// Form - Thank You (/oddaj-rzeczy)
