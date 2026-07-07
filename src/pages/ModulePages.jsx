import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import MODULES_DATA from "../data/modulesData";
import ModuleCards from "../components/ModuleCards.jsx";
import "../style.css";

function ModulesPage() {
  const [completedModules, setCompletedModules] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const completedRef = ref(db, "completedModules");
    onValue(
      completedRef,
      (snapshot) => {
        setCompletedModules(snapshot.val() || {});
        setLoading(false);
      },
      () => {
        setError("Please try again!");
        setLoading(false);
      }
    );
  }, []);

  const sidebarLinks = MODULES_DATA.map((modules) => (
    <li key={modules.id}>
      <Link to={`/modules/${modules.id}`}>{modules.title}</Link>
    </li>
  ));

  const moduleCards = MODULES_DATA.map((modules) => (
    <ModuleCards
      key={modules.id}
      module={modules}
      isCompleted={!!completedModules[modules.id]}
    />
  ));

  return (
    <div className="page-wrapper">
      <main>
        <div className="modules-layout">
          <aside className="modules-sidebar" aria-label="Module navigation">
            <h2>Modules</h2>
            <ul className="sidebar-module-list">{sidebarLinks}</ul>
            {loading && <p className="loading-text">Loading progress...</p>}
            {error && <p className="error-text" role="alert">{error}</p>}
          </aside>

          <section className="modules-grid-section">
            <h2>All Modules</h2>
            <p>
              Choose a module below to read the lesson. After reading, take the quiz to earn points!
            </p>
            <div className="modules-grid">{moduleCards}</div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 NeuroLearn</p>
      </footer>
    </div>
  );
}

export default ModulesPage;