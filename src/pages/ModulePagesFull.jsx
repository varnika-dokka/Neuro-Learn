import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";
import MODULES_DATA from "../data/modulesData";
import "../style.css";

function ModulePagesFull() {
  const { moduleId } = useParams();

  const module = MODULES_DATA.find((modules) => modules.id === moduleId);

  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [markError, setMarkError] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    if (!module) {
      setLoadingStatus(false);
      return;
    }

    const completedRef = ref(db, `completedModules/${moduleId}`);
    const unregisterFunction = onValue(completedRef, (snapshot) => {
      setIsCompleted(snapshot.val() === true);
      setLoadingStatus(false);
    }, () => setLoadingStatus(false));

    return () => unregisterFunction();
  }, [moduleId, module]);

  if (!module) {
    return (
      <div className="page-wrapper">
        <main>
          <section>
            <h2>Module not found</h2>
            <p>That module doesn't exist. <Link to="/modules">Back to Modules</Link></p>
          </section>
        </main>
        <footer className="site-footer">
          <p>© 2026 NeuroLearn</p>
        </footer>
      </div>
    );
  }

  function handleMarkComplete() {
    setLoading(true);
    setMarkError(null);

    const completedRef = ref(db, `completedModules/${moduleId}`);
    set(completedRef, true)
      .then(() => {
        setIsCompleted(true);
        setLoading(false);
      })
      .catch((error) => {
        setMarkError(error.message);
        setLoading(false);
      });
  }

  return (
    <div className="page-wrapper">
      <main>
        <div className="modules-layout">

          <aside className="modules-sidebar" aria-label="Module navigation">
            <h2>Modules</h2>
            <nav aria-label="Module list">
              <ul className="sidebar-module-list">
                {MODULES_DATA.map((modules) => (
                  <li key={modules.id}>
                    <Link
                      to={`/modules/${modules.id}`}
                      className={`sidebar-link ${modules.id === moduleId ? "sidebar-link--active" : ""}`}
                    >
                      {modules.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="module-detail">
            <Link to="/modules" className="back-link">← Back to all modules</Link>

            <h2>{module.title}</h2>

            <img
              src={module.image}
              alt={module.imageAlt}
              className="module-image module-detail-img"
            />

            <p className="module-detail-content">{module.content}</p>

            <div className="module-actions">
              {loadingStatus ? (
                <p className="loading-text">Loading your progres...</p>
              ) : isCompleted ? (
                <p className="completed-notice" role="status">
                  You've completed this module!
                </p>
              ) : (
                <button
                  className="btn btn-complete"
                  onClick={handleMarkComplete}
                  disabled={loading}
                >
                  Mark as Complete
                </button>
              )}

              {markError && (
                <p className="error-text" role="alert">{markError}</p>
              )}

              {module.quizId && (
                <Link
                  to={`/quizzes/${module.quizId}`}
                  className="btn btn-quiz"
                >
                  Take the {module.title} Quiz →
                </Link>
              )}
            </div>
          </article>

        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 NeuroLearn</p>
      </footer>
    </div>
  );
}

export default ModulePagesFull;