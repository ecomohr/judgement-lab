import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import JudgementLab from "./pages/JudgementLab";
import SnakeGame from "./pages/Snake";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/judgement-lab" element={<JudgementLab />} />
      <Route path="/snake-game" element={<SnakeGame />} />
    </Routes>
  );
}