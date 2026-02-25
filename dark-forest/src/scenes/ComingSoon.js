// scenes/shared/ComingSoon.js
// ─────────────────────────────────────────────────────────────
// Shared placeholder scene for unfinished branches.
// ─────────────────────────────────────────────────────────────
import Scene from "../components/Scene";
import { SUGGESTION_URL } from "../constants";

export default function ComingSoon({ restart }) {
  return (
    <Scene
      title="Coming Soon"
      text={
        <>
          <em>I'm working on this.</em>
          <br /><br />
          <em>Tip? ... please?</em>
        </>
      }
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="restart-btn" onClick={restart}>
          Play Again
        </button>
        <button
          className="restart-btn"
          style={{ marginLeft: "12px" }}
          onClick={() => window.open(SUGGESTION_URL)}
        >
          Make a Suggestion!
        </button>
      </div>

      {[100, 50, 20].map((amt) => (
        <button
          key={amt}
          className="choice-btn"
          onClick={() => window.open("https://venmo.com/u/Cameron-Gietzen")}
        >
          Yes please. ${amt}
        </button>
      ))}
    </Scene>
  );
}
