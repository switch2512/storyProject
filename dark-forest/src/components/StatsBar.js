// components/StatsBar.js
// ─────────────────────────────────────────────────────────────
// Displays health, gold, and optional charisma stats.
// Flashes a stat when its value changes.
// ─────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

function AnimatedStat({ label, value }) {
  const [flash, setFlash] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the initial mount — only animate on actual changes.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 600);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="stat">
      {label}: <span className={flash ? "stat-flash" : ""}>{value}</span>
    </div>
  );
}

export default function StatsBar({ health, gold, charisma, showCharisma }) {
  return (
    <div className="stats">
      <AnimatedStat label="Health"   value={health} />
      <AnimatedStat label="Gold"     value={gold} />
      {showCharisma && (
        <AnimatedStat label="Charisma" value={charisma} />
      )}
    </div>
  );
}
