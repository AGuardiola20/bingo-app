import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import GameScreen from "./screens/GameScreen";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
