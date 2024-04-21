import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Frontend/Home";
import About from "./Frontend/About";
import Contact from "./Frontend/Contact";
import Dashboard from "./Frontend/Dashboard";
import Projects from "./Frontend/Projects.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext.jsx";
import { Navigate } from "react-router-dom";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
