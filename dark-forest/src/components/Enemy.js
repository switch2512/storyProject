// components/Enemy.js
// ─────────────────────────────────────────────────────────────
// Displays the current enemy panel — image, name, and health.
// Appears to the right of the active scene.
//
// Usage:
//   <Enemy enemyType="Wolf" enemyHealth={40} image="/enemies/wolf.png" />
//
// Props:
//   enemyType        — display name of the enemy
//   enemyHealth      — current enemy HP
//   image            — (optional) path or URL to an enemy image
//   applyEnemyHealth — function to deal damage
//   summonEnemy      — function to set a new enemy
// ─────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

const flashStyles = `
  @keyframes enemyFlash {
    0%   { color: #ffffff; font-weight: 800; text-shadow: 0 0 8px rgba(255,255,255,0.9); transform: translateX(0); }
    15%  { transform: translateX(-4px); }
    30%  { transform: translateX(4px); }
    45%  { transform: translateX(-3px); }
    60%  { transform: translateX(3px); color: #f0dfa0; text-shadow: 0 0 4px rgba(200,168,75,0.5); }
    75%  { transform: translateX(-1px); }
    100% { color: #c8a84b; font-weight: 600; text-shadow: none; transform: translateX(0); }
  }
  .enemy-flash {
    display: inline-block;
    animation: enemyFlash 0.8s ease-out;
    font-weight: 800;
  }
`;

function AnimatedStat({ label, value }) {
  const [flash, setFlash] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
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
      {label}: <span className={flash ? "enemy-flash" : ""}>{value}</span>
    </div>
  );
}

export default function Enemy({ enemyType, enemyHealth, image }) {
    if (enemyType) {
        return (
            <>
            <style>{flashStyles}</style>
            <div className="enemy-panel">

                {/* Enemy image — supply an image prop to fill this */}
                <div className="enemy-image-box">
                    <img src={`${process.env.PUBLIC_URL}/enemies/${enemyType}.png`} alt={enemyType} />
                </div>

                {/* Enemy name */}
                <div className="scene-title" style={{ marginBottom: 0, textAlign: "center" }}>
                {enemyType}
                </div>

                {/* Enemy health */}
                <div className="stats" style={{ justifyContent: "center" }}>
                <AnimatedStat label="HP" value={enemyHealth} />
                </div>

            </div>
            </>
        );
    } else if (image) {
        return (
            <>
            <style>{flashStyles}</style>
            <div className="enemy-panel">

                {/* Enemy image — supply an image prop to fill this */}
                <div className="enemy-image-box">
                    <img src={`${process.env.PUBLIC_URL}/images/${image}.png`} alt={enemyType} />
                </div>

                {/* Enemy name */}
                <div className="scene-title" style={{ marginBottom: 0, textAlign: "center" }}>
                {image}
                </div>
            </div>
            </>
        )
    }
    if (!enemyType) return null;


}
