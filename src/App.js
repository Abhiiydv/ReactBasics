import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForm heading="Enter text to play with.." mode={mode} />
              }
            />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
