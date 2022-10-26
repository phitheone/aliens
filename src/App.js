import Home from "./pages/Home";
import RarityP from "./pages/Traits";
import Error from "./pages/Error";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rarity" element={<RarityP />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
