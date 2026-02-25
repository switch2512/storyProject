// App.js
// ─────────────────────────────────────────────────────────────
// Root component. Manages all game state (health, gold, charisma)
// and renders whichever scene is currently active.
//
// TO ADD A NEW SCENE:
//   1. Create a new file in src/scenes/yourfolder/YourScene.js
//   2. Import it below
//   3. Add it to the sceneMap object with a string key
//   4. Point any choice's goTo() call at that key
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import "./App.css";
import { SUGGESTION_URL } from "./constants";

// ── Component imports ──
import StatsBar  from "./components/StatsBar";
import Popup     from "./components/Popup";

// ── Scene imports ──
import ForestEdge   from "./scenes/start/ForestEdge";
import MasonWakes   from "./scenes/mason/MasonWakes";
import HenryHarkins from "./scenes/henry/HenryHarkins";
import ComingSoon   from "./scenes/ComingSoon";

// ── Scene map ─────────────────────────────────────────────────
// Add new scenes here. The key is the string you pass to goTo().
const sceneMap = {
  forestEdge:    ForestEdge,
  masonWakes:    MasonWakes,
  henryHarkins:  HenryHarkins,
  comingSoon:    ComingSoon,
};

// ─────────────────────────────────────────────────────────────

export default function App() {
  const [currentScene, setCurrentScene] = useState("forestEdge");
  const [health,        setHealth]       = useState(100);
  const [gold,          setGold]         = useState(10);
  const [charisma,      setCharisma]     = useState(80);
  const [showCharisma,  setShowCharisma] = useState(false);
  const [popup,         setPopup]        = useState(null);
  const [bodyRed,       setBodyRed]      = useState(false);

  // ── Navigation ──────────────────────────────────────────────
  function goTo(sceneId, healthChange, moneyChange) {
    setCurrentScene(sceneId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (healthChange !== undefined) applyHealth(healthChange);
    if (moneyChange  !== undefined) applyGold(moneyChange);
  }

  // ── Stat helpers ────────────────────────────────────────────
  function delayedPopup(message) {
    setTimeout(() => setPopup(message), 2000);
  }

  function applyHealth(amount) {
    const next = health + amount;
    setHealth(next);
    if (next <= 0) {
      delayedPopup("Your health has dropped to 0. You have died.");
      setBodyRed(true);
    } else {
      delayedPopup("Your health has changed: " + amount);
    }
  }

  function applyGold(amount) {
    setGold(gold + amount);
    delayedPopup("Your gold has changed: $" + amount);
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
    setPopup(null);
    setCurrentScene("forestEdge");
  }

  // ── Render ──────────────────────────────────────────────────
  const CurrentScene = sceneMap[currentScene];

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

      {/* Popup */}
      <Popup message={popup} onClose={() => setPopup(null)} />

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
          key={currentScene}
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
