import LandingPage from "./components/LandingPage";
import FormPage from "./components/FormPage";
import ResultPage from "./components/ResultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
