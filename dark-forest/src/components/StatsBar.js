// components/StatsBar.js
// ─────────────────────────────────────────────────────────────
// Displays health, gold, and optional charisma stats.
// ─────────────────────────────────────────────────────────────

export default function StatsBar({ health, gold, charisma, showCharisma }) {
  return (
    <div className="stats">
      <div className="stat">Health: <span>{health}</span></div>
      <div className="stat">Gold: <span>{gold}</span></div>
      {showCharisma && (
        <div className="stat">Charisma: <span>{charisma}</span></div>
      )}
    </div>
  );
}
