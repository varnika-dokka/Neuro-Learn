import { Link } from "react-router-dom";
import "../style.css";

function ModuleCards({ module, isCompleted }) {
  return (
    <Link to={`/modules/${module.id}`} className="module-cards-link" aria-label={`Go to ${module.title} module`}>
      <article className={`module-cards ${isCompleted ? "module-cards--completed" : ""}`}>
        <img
          src={module.image}
          alt={module.imageAlt}
          className="module-cards-img"
        />
        <div className="module-cards-body">
          <h3>{module.title}</h3>
          <p>{module.summary}</p>
          {isCompleted && (
            <span className="module-badge" aria-label="Module completed">
              ✓ Completed
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}

export default ModuleCards;