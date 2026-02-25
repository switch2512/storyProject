// components/Popup.js
// ─────────────────────────────────────────────────────────────
// Modal popup for stat change notifications and alerts.
// ─────────────────────────────────────────────────────────────

export default function Popup({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="popup">
      <p className="popup-message">{message}</p>
      <button className="restart-btn" onClick={onClose}>OK</button>
    </div>
  );
}
