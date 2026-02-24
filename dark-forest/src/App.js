import { useState } from "react";
import "./App.css";

// ─── Scene Data ───────────────────────────────────────────────────────────────
const scenes = {
  scene1: {
    title: "The Forest's Edge",
    text: (
      <>
        You stand at the edge of a vast, dark forest. The trees loom tall and twisted,
        their branches blocking out the moon. Somewhere deep within, you can hear
        the faint sound of <em>running water</em> — and something else.
        A low, rhythmic <em>drumming</em>.
        <br /><br />
        You grip your lantern tightly. You're here for a reason, but you can't remember what it is.
        In fact, you can't even remember what your name is. What was it?
      </>
    ),
    choices: [
      { label: "Mason Waters",    sceneId: "masonWaters", healthChange: undefined, moneyChange: -100000 },
      { label: "Cameron Gietzen", sceneId: "comingSoon",  healthChange: undefined, moneyChange: undefined },
      { label: "Henry Harkins",   sceneId: "henryHarkins", healthChange: 50,       moneyChange: undefined, unlockCharisma: true },
      { label: "Wes Dayley",      sceneId: "comingSoon",  healthChange: undefined, moneyChange: undefined },
    ],
  },

  masonWaters: {
    title: "You Wake Up",
    text: (
      <>
        <br />
        Your alarm is <em>blaring</em>. The grey of twilight dimly lights the room.<br />
        Shit. You're late for school, you haven't done the reading, ...<em>and you're on call!</em>
        <br /><br />
        Ya got no gumption.
      </>
    ),
    choices: [
      { label: "Slap the snooze button and go back to sleep", sceneId: "comingSoon" },
      { label: "Jump out of bed and rush to school",          sceneId: "comingSoon" },
    ],
  },

  henryHarkins: {
    title: "You Remember Now",
    text: (
      <>
        That's right. You're fricken <em>Hard</em> Henry Harkins.<br />
        You regrip your lantern, flexing.<br />
        Your shirt strains then <em>rips</em> as your muscles <em>bulge</em>.
        <br /><br />
        Who dah man? You dah man.
      </>
    ),
    choices: [
      { label: "Flex one more time, for the girls in the back", sceneId: "comingSoon" },
      { label: "Follow the river downstream",                   sceneId: "comingSoon" },
      { label: "Swim across the river",                         sceneId: "comingSoon" },
    ],
  },

  comingSoon: {
    title: "Coming Soon",
    text: (
      <>
        <em>I'm working on this.</em>
        <br /><br />
        <em>Tip? ... please?</em>
      </>
    ),
    isComingSoon: true,
  },
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentScene, setCurrentScene] = useState("scene1");
  const [health,   setHealth]   = useState(100);
  const [gold,     setGold]     = useState(10);
  const [charisma, setCharisma] = useState(80);
  const [showCharisma, setShowCharisma] = useState(false);
  const [popup,    setPopup]    = useState(null);  // null = hidden, string = message
  const [bodyRed,  setBodyRed]  = useState(false);

  // ── Navigation ──────────────────────────────────────────────────────────────
  function goTo(sceneId, healthChange, moneyChange, unlockCharisma) {
    setCurrentScene(sceneId);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (healthChange !== undefined) applyHealth(healthChange);
    if (moneyChange  !== undefined) applyGold(moneyChange);
    if (unlockCharisma) {
      setShowCharisma(true);
      setPopup("You have discovered the Charisma Stat (80)");
    }
  }

  function applyHealth(amount) {
    setHealth(prev => {
      const next = prev + amount;
      setPopup("Your health has changed: " + amount);
      if (next <= 0) {
        setPopup("Your Health has dropped to 0. You have died.");
        setBodyRed(true);
      }
      return next;
    });
  }

  function applyGold(amount) {
    setGold(prev => {
      setPopup("Your gold has changed: $" + amount);
      return prev + amount;
    });
  }

  function restart() {
    setHealth(100);
    setGold(10);
    setCharisma(80);
    setShowCharisma(false);
    setBodyRed(false);
    setPopup(null);
    setCurrentScene("scene1");
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  const scene = scenes[currentScene];

  return (
    <div className={`page${bodyRed ? " red-bg" : ""}`}>

      {/* Top-right suggestion button */}
      <a
        className="top-right-btn"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdBtXTODMNiQdnPWXTB8I5iuLjeHwozUUPaZbfkNifedUi0eA/viewform?usp=publish-editor"
        target="_blank"
        rel="noreferrer"
      >
        Make a Suggestion
      </a>

      {/* Popup */}
      {popup && (
        <div className="popup">
          <p className="popup-message">{popup}</p>
          <button className="restart-btn" onClick={() => setPopup(null)}>OK</button>
        </div>
      )}

      <div id="game-container">

        {/* Header */}
        <div className="header">
          <div className="game-title">The Dark Forest</div>
          <div className="game-subtitle">A Choose Your Own Adventure</div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat">Health: <span>{health}</span></div>
          <div className="stat">Gold: <span>{gold}</span></div>
          {showCharisma && (
            <div className="stat">Charisma: <span>{charisma}</span></div>
          )}
        </div>

        <div className="divider">⁕ ⁕ ⁕</div>

        {/* Scene */}
        <div className="scene active" key={currentScene}>
          <div className="scene-title">{scene.title}</div>
          <div className="scene-text">{scene.text}</div>

          {scene.isComingSoon ? (
            <>
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <button className="restart-btn" onClick={restart}>Play Again</button>
                <button
                  className="restart-btn"
                  style={{ marginLeft: "12px" }}
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdBtXTODMNiQdnPWXTB8I5iuLjeHwozUUPaZbfkNifedUi0eA/viewform?usp=publish-editor")}
                >
                  Make a Suggestion!
                </button>
              </div>
              <div className="choices">
                {[100, 50, 20].map(amt => (
                  <button
                    key={amt}
                    className="choice-btn"
                    onClick={() => window.open("https://venmo.com/u/Cameron-Gietzen")}
                  >
                    Yes please. ${amt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="choices">
              {scene.choices.map((choice, i) => (
                <button
                  key={i}
                  className="choice-btn"
                  onClick={() => goTo(
                    choice.sceneId,
                    choice.healthChange,
                    choice.moneyChange,
                    choice.unlockCharisma
                  )}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
