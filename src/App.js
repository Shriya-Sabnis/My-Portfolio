// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomeIcon } from "./icons";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            padding: "1.25rem 2rem",
            borderBottom: "1px solid var(--card-border)",
            backdropFilter: "blur(12px)",
            background:
              "linear-gradient(to right, rgba(15,15,16,0.95), rgba(15,15,16,0.75))",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                fontSize: "0.9rem",
                textTransform: "uppercase",
              }}
            >
              <HomeIcon />
              <span>Portfolio</span>
            </Link>
            <nav
              style={{
                display: "flex",
                gap: "1rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </div>

        <footer
          style={{
            borderTop: "1px solid var(--card-border)",
            padding: "1.25rem 2rem",
            marginTop: "2rem",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;