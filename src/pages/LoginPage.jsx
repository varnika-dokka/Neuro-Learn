import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mobile-container app-page">
      <header className="header">
        <h1>NeuroLearn</h1>
      </header>
      <nav className="nav-bar" aria-label="Primary">
        <Link to="/login">Login</Link>
      </nav>
      <main className="content">
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" type="email" className="form-input" placeholder="Enter your Email" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="form-input" placeholder="Enter your Password" />
        </div>
        <button className="btn" type="submit">Sign In</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 NeuroLink</p>
      </footer>
    </div>
  );
}