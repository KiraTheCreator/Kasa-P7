import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Housing from "./pages/Housing";
// import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apropos" element={<About />} /> */}
        {/* <Route path="/logements/:id" element={<Housing />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;