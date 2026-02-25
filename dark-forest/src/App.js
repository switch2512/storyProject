// App.js
// ─────────────────────────────────────────────────────────────
// Root component. Manages all game state (health, gold, charisma)
// and renders whichever scene is currently active.
//
// TO ADD A NEW SCENE:
//   1. Create a new file in src/scenes/yourfolder/YourScene.js
//   2. Import it in whichever scene(s) link to it
//   3. Pass it directly to goTo() — no registration needed
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import "./App.css";
import { SUGGESTION_URL } from "./constants";

// ── Component imports ──
import StatsBar  from "./components/StatsBar";
import Popup     from "./components/Popup";

// ── Initial scene ──
import ForestEdge from "./scenes/start/ForestEdge";

// ─────────────────────────────────────────────────────────────

export default function App() {
  // useState(() => ForestEdge) uses the lazy-initializer form so React
  // doesn't mistake the component function for a state initializer.
  const [currentScene, setCurrentScene] = useState(() => ForestEdge);
  const [health,        setHealth]       = useState(100);
  const [gold,          setGold]         = useState(10);
  const [charisma,      setCharisma]     = useState(80);
  const [showCharisma,  setShowCharisma] = useState(false);
  const [popupQueue,    setPopupQueue]   = useState([]);
  const [pendingCount,  setPendingCount] = useState(0);
  const [bodyRed,       setBodyRed]      = useState(false);

  // True from the moment delayedPopup is called until the last popup is dismissed.
  const blocked = pendingCount > 0 || popupQueue.length > 0;

  // ── Navigation ──────────────────────────────────────────────
  function goTo(Scene, healthChange, moneyChange) {
    // () => Scene tells React the new state IS the component, not its return value.
    setCurrentScene(() => Scene);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (healthChange !== undefined) applyHealth(healthChange);
    if (moneyChange  !== undefined) applyGold(moneyChange);
  }

  // ── Stat helpers ────────────────────────────────────────────
  function delayedPopup(message) {
    setPendingCount(c => c + 1);
    setTimeout(() => {
      setPopupQueue(q => [...q, message]);
      setPendingCount(c => c - 1);
    }, 1000);
  }

  function dismissPopup() {
    setPopupQueue(q => q.slice(1));
  }

  function applyHealth(amount) {
    const next = health + amount;
    setHealth(next);
    if (next <= 0) {
      delayedPopup("Your health has dropped to 0. You have died.");
      setBodyRed(true);
    } else if (amount > 0) {
      delayedPopup("Your health has increased by " + amount);
    } else {
      delayedPopup("Your health has decreased by " + amount)
    }
  }

  function applyGold(amount) {
    setGold(gold + amount);
    if (amount > 0) {
      delayedPopup("Your gold has increased by " + amount.toLocaleString());
    } else {
      delayedPopup("Your gold has changed by " + amount.toLocaleString())
    }
  }

  function unlockCharisma() {
    setShowCharisma(true);
    delayedPopup("You have discovered the Charisma Stat (80)");
  }

  // ── Restart ─────────────────────────────────────────────────
  function restart() {
    setHealth(100);
    setGold(10);
    setCharisma(80);
    setShowCharisma(false);
    setBodyRed(false);
    setPopupQueue([]);
    setPendingCount(0);
    setCurrentScene(() => ForestEdge);
  }

  // ── Render ──────────────────────────────────────────────────
  const CurrentScene = currentScene;

  return (
    <div className={`page${bodyRed ? " red-bg" : ""}`}>

      {/* Top-left restart button */}
      <button className="top-left-btn" onClick={restart}>
        Play Again
      </button>

      {/* Top-right suggestion button */}
      <a
        className="top-right-btn"
        href={SUGGESTION_URL}
        target="_blank"
        rel="noreferrer"
      >
        Make a Suggestion
      </a>

      {/* Click blocker — active during delay and while popup is open */}
      {blocked && <div className="click-blocker" />}

      {/* Popup */}
      <Popup message={popupQueue[0]} onClose={dismissPopup} />

      <div id="game-container">

        {/* Header */}
        <div className="header">
          <div className="game-title">The Dark Forest</div>
          <div className="game-subtitle">A Choose Your Own Adventure</div>
        </div>

        {/* Stats */}
        <StatsBar
          health={health}
          gold={gold}
          charisma={charisma}
          showCharisma={showCharisma}
        />

        <div className="divider">⁕ ⁕ ⁕</div>

        {/* Active Scene — passes down everything it might need */}
        <CurrentScene
          key={CurrentScene.name}
          goTo={goTo}
          restart={restart}
          unlockCharisma={unlockCharisma}
          health={health}
          gold={gold}
          charisma={charisma}
        />

      </div>
    </div>
  );
}
