import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="header">
      <h1>NeuroLearn</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/modules">Modules</Link>
        <Link to="/pet-shop">Pet Shop</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}