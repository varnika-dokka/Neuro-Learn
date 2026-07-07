import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ModulesPage from "./pages/ModulePages";
import ModulePagesFull from "./pages/ModulePagesFull";
import QuizzesPage from "./pages/QuizzesPage";
import PetShopPage from "./pages/PetShopPage";
import LeaderboardPage from "./pages/leaderboard_page";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/modules/:moduleId" element={<ModulePagesFull />} />
        <Route path="/quizzes/:quizId" element={<QuizzesPage />} />
        <Route path="/pet-shop" element={<PetShopPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
