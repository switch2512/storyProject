// components/StatsBar.js
// ─────────────────────────────────────────────────────────────
// Displays health, gold, and optional charisma stats.
// Flashes, shakes, and bolds a stat when its value changes.
// ─────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

const flashStyles = `
  @keyframes statFlash {
    0%   { color: #ffffff; font-weight: 800; text-shadow: 0 0 8px rgba(255,255,255,0.9); transform: translateX(0); }
    15%  { transform: translateX(-4px); }
    30%  { transform: translateX(4px); }
    45%  { transform: translateX(-3px); }
    60%  { transform: translateX(3px); color: #f0dfa0; text-shadow: 0 0 4px rgba(200,168,75,0.5); }
    75%  { transform: translateX(-1px); }
    100% { color: #c8a84b; font-weight: 600; text-shadow: none; transform: translateX(0); }
  }
  .stat-flash {
    display: inline-block;
    animation: statFlash 0.8s ease-out;
    font-weight: 800;
  }
`;

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
    const timer = setTimeout(() => setFlash(false), 800);
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
    <>
      <style>{flashStyles}</style>
      <div className="stats">
        <AnimatedStat label="Health"   value={health} />
        <AnimatedStat label="Gold"     value={gold} />
        {showCharisma && (
          <AnimatedStat label="Charisma" value={charisma} />
        )}
      </div>
    </>
  );
}
