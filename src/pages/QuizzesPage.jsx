import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import QUIZ_QUESTIONS from "../data/quizzesData";

function QuizzesPage() {
  const { quizId } = useParams();
  const questions = QUIZ_QUESTIONS[quizId] || [];

  const [answers, setAnswers] = useState({});
  const [matchedPairs, setMatchedPairs] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalTrophies, setTotalTrophies] = useState(0);

  const POINTS_PER_CORRECT = 100;
  const TROPHIES_PER_CORRECT = 50;

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleMatchingClick = (side, value) => {
    if (submitted) return;

    if (side === "left") {
      setSelectedLeft(selectedLeft === value ? null : value);
    } else if (side === "right" && selectedLeft !== null) {
      setMatchedPairs({ ...matchedPairs, [selectedLeft]: value });
      setSelectedLeft(null);
    }
  };

  const getMatchingButtonClass = (side, value) => {
    if (side === "left") {
      return matchedPairs[value]
        ? "paired"
        : selectedLeft === value
        ? "selected"
        : "";
    } else {
      return Object.values(matchedPairs).includes(value)
        ? "paired"
        : selectedLeft &&
          matchedPairs[selectedLeft] === value
        ? "selected"
        : "";
    }
  };

  const calculateScore = () => {
    let points = 0;
    let trophies = 0;

    questions.forEach((q) => {
      if (q.type === "multiple-choice" || q.type === "combobox") {
        if (answers[q.id] === q.correct) {
          points += POINTS_PER_CORRECT;
          trophies += TROPHIES_PER_CORRECT;
        }
      } else if (q.type === "matching") {
        Object.entries(q.correct).forEach(([left, right]) => {
          if (matchedPairs[left] === right) {
            points += POINTS_PER_CORRECT;
            trophies += TROPHIES_PER_CORRECT;
          }
        });
      }
    });

    setTotalPoints(points);
    setTotalTrophies(trophies);
  };

  const handleSubmit = () => {
    calculateScore();
    setSubmitted(true);
  };

  const totalPossiblePoints = questions.reduce((sum, q) => {
    if (q.type === "multiple-choice" || q.type === "combobox") return sum + POINTS_PER_CORRECT;
    if (q.type === "matching") return sum + Object.keys(q.correct).length * POINTS_PER_CORRECT;
    return sum;
  }, 0);

  const totalPossibleTrophies = questions.reduce((sum, q) => {
    if (q.type === "multiple-choice" || q.type === "combobox") return sum + TROPHIES_PER_CORRECT;
    if (q.type === "matching") return sum + Object.keys(q.correct).length * TROPHIES_PER_CORRECT;
    return sum;
  }, 0);

  return (
    <div className="page-wrapper">
      <main>
        <section>
          <h2>{quizId.charAt(0).toUpperCase() + quizId.slice(1)} Quiz</h2>

          {submitted && (
            <div
              className="quiz-score"
              style={{
                background: "#fff4cc",
                border: "2px solid #f0c419",
                padding: "1rem",
                borderRadius: "10px",
                marginBottom: "2rem",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              <h3> Quiz Completed!</h3>
              <p>
                Trophies: {totalTrophies} / {totalPossibleTrophies}
              </p>
              <p>
                Points: {totalPoints} / {totalPossiblePoints}
              </p>
            </div>
          )}

          {questions.length === 0 && <p>No questions available for this quiz.</p>}

          {questions.map((q) => (
            <div key={q.id} className="quiz-question">
              <p>{q.question}</p>

              {q.type === "multiple-choice" && (
                <fieldset>
                  {q.options.map((opt) => (
                    <label key={opt}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        disabled={submitted}
                        checked={answers[q.id] === opt}
                        onChange={() => handleChange(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </fieldset>
              )}

              {q.type === "combobox" && (
                <select
                  disabled={submitted}
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                >
                  <option value="">Select an answer</option>
                  {q.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}

              {q.type === "matching" && (
                <div className="matching-grid">
                  <div className="matching-left">
                    {q.left.map((l) => (
                      <button
                        key={l}
                        className={getMatchingButtonClass("left", l)}
                        onClick={() => handleMatchingClick("left", l)}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                  <div className="matching-right">
                    {q.right.map((r) => (
                      <button
                        key={r}
                        className={getMatchingButtonClass("right", r)}
                        onClick={() => handleMatchingClick("right", r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {submitted && q.type !== "matching" && (
                <p>
                  {answers[q.id] === q.correct
                    ? "✅ Correct"
                    : `❌ Incorrect (Correct: ${q.correct})`}
                </p>
              )}

              {submitted && q.type === "matching" && (
                <ul>
                  {Object.entries(q.correct).map(([left, right]) => (
                    <li key={left}>
                      {left} →{" "}
                      {matchedPairs[left] === right
                        ? "✅ Correct"
                        : `❌ ${matchedPairs[left] || "Unmatched"} (Correct: ${right})`}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {questions.length > 0 && !submitted && (
            <button className="btn" onClick={handleSubmit}>
              Submit Quiz
            </button>
          )}

          <Link to="/modules" className="btn">
            ← Back to Modules
          </Link>
        </section>
      </main>
    </div>
  );
}

export default QuizzesPage;