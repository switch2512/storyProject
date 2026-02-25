// scenes/shared/ComingSoon.js
// ─────────────────────────────────────────────────────────────
// Shared placeholder scene for unfinished branches.
// ─────────────────────────────────────────────────────────────

export default function ComingSoon({ restart }) {
  return (
    <div className="scene active">
      <div className="scene-title">Coming Soon</div>
      <div className="scene-text">
        <em>I'm working on this.</em>
        <br /><br />
        <em>Tip? ... please?</em>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="restart-btn" onClick={restart}>
          Play Again
        </button>
        <button
          className="restart-btn"
          style={{ marginLeft: "12px" }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdBtXTODMNiQdnPWXTB8I5iuLjeHwozUUPaZbfkNifedUi0eA/viewform?usp=publish-editor"
            )
          }
        >
          Make a Suggestion!
        </button>
      </div>

      <div className="choices">
        {[100, 50, 20].map((amt) => (
          <button
            key={amt}
            className="choice-btn"
            onClick={() => window.open("https://venmo.com/u/Cameron-Gietzen")}
          >
            Yes please. ${amt}
          </button>
        ))}
      </div>
    </div>
  );
}
