import HomePage from "./pages/HomePage";
import FightPage from "./pages/FightPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EquationPage from "./pages/equationPage";
import StrategyScreen from "./pages/strategyScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fight-page" element={<FightPage />} />
        <Route path="/strategyScreen" element={<StrategyScreen />} />
        <Route path="/group/:index" element={<EquationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
