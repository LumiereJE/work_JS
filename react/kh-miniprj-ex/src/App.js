import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HOME from "./pages/Home";

function App() {
  return (
    // 라우터 경로
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HOME />} />
      </Routes>
    </Router>
  );
}

export default App;
