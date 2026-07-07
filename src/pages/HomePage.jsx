import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="mobile-container landing-layout">
      <main className="content">
        <section className="section landing-hero">
          <div className="hero-copy">
            <p className="tagline">Learn about neurological disorders and how to care for loved ones with them</p>
            <h2>How NeuroLearn Works</h2>
            <p>Earn points by working through educational modules and taking knowledge checks. Use your points to dress up a virtual pet and compete with your friends!</p>
          </div>
          <div className="hero-image">
            <img src="/img/brain.jpeg" alt="Cute Brain Character" />
          </div>
        </section>
        <footer className="site-footer">
          <p>&copy; 2026 NeuroLearn</p>
        </footer>
      </main>
    </div>
  );
}
