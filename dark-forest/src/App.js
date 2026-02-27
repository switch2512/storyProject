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
import Enemy     from "./components/Enemy"

// ── Initial scene ──
import ForestEdge from "./scenes/start/ForestEdge";

// ─────────────────────────────────────────────────────────────

export default function App() {
  // useState(() => ForestEdge) uses the lazy-initializer form so React
  // doesn't mistake the component function for a state initializer.
  const [currentScene, setCurrentScene]  = useState(() => ForestEdge);
  const [health,        setHealth]       = useState(100);
  const [gold,          setGold]         = useState(10);
  const [charisma,      setCharisma]     = useState(80);
  const [showCharisma,  setShowCharisma] = useState(false);
  const [popupQueue,    setPopupQueue]   = useState([]);
  const [pendingCount,  setPendingCount] = useState(0);
  const [bodyRed,       setBodyRed]      = useState("");
  const [gameTitle,     setGameTitle]    = useState("The Dark Forest");
  const [enemyHealth,   setEnemyHealth]  = useState(0);
  const [enemyType,     setEnemyType]    = useState("");
  const [image,             setImage]    = useState("");

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

  // ── Cameron's Functions ────────────────────────────────────────────
  function delayedPopup(message) {
    setPendingCount(c => c + 1);
    setTimeout(() => {
      setPopupQueue(q => [...q, message]);
      setPendingCount(c => c - 1);
    }, 1000);
  }

  function summonImage(image) {
    setImage(image)
  }

  function dismissPopup() {
    setPopupQueue(q => q.slice(1));
  }

  function applyHealth(amount) {
    const next = health + amount;
    setHealth(next);
    if (next <= 0) {
      delayedPopup("Your health has dropped to 0. You have died.");
      setBodyRed("red-bg");
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

  function applyCharisma (amount) {
    setCharisma(charisma + amount);
    if (amount > 0) {
      delayedPopup("Your charisma has increase by " + amount)
    } else {
      delayedPopup("Your charisma has changed by " + amount)
    }
  }

  function unlockCharisma() {
    setShowCharisma(true);
    delayedPopup("You have discovered the Charisma Stat (80)");
  }

  function newTitle(name) {
    setGameTitle(name)
  }
  // ── Enemy Functions ─────────────────────────────────────────────────
  function applyEnemyHealth(amount) {
    setEnemyHealth(enemyHealth + amount)
    if (enemyHealth < 1) {
      delayedPopup("Enemy defeated!")
      setEnemyType("")
    } else {
      delayedPopup("Enemy took " + amount + " damage.")
    }
  }

  function summonEnemy(type, health) {
    setEnemyType(type)
    setEnemyHealth(health)

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
    setGameTitle("The Dark Forest")
    setEnemyType("")
    setImage("");
  }

  // ── Render ──────────────────────────────────────────────────
  const CurrentScene = currentScene;

  return (
    <div className={ "page " + bodyRed }>

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
          <div className="game-title">{gameTitle}</div>
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

        {/* Scene + Enemy side by side */}
        <div className="scene-row">
          <CurrentScene
            key={CurrentScene.name}
            goTo={goTo}
            restart={restart}
            unlockCharisma={unlockCharisma}
            health={health}
            gold={gold}
            charisma={charisma}
            applyCharisma={applyCharisma}
            newTitle={newTitle}
            applyEnemyHealth={applyEnemyHealth}
            summonEnemy={summonEnemy}
            summonImage={summonImage}
          />
          <Enemy
            enemyType={enemyType}
            enemyHealth={enemyHealth}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}
