// components/Scene.js
// ─────────────────────────────────────────────────────────────
// Reusable wrapper for every scene. Handles the fade-in animation
// and consistent layout. Just pass in title, text, and choices.
//
// Usage:
//   <Scene title="My Scene" text={<>Some <em>text</em></>}>
//     <button className="choice-btn" onClick={...}>Choice</button>
//   </Scene>
// ─────────────────────────────────────────────────────────────

export default function Scene({ title, text, children }) {
  return (
    <div className="scene active">
      <div className="scene-title">{title}</div>
      <div className="scene-text">{text}</div>
      <div className="choices">
        {children}
      </div>
    </div>
  );
}
