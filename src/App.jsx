import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/smashers-zone-react-app/home" element={<Home />} />
        <Route path="/smashers-zone-react-app/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
