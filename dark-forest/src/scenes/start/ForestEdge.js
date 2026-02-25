// scenes/start/ForestEdge.js
// ─────────────────────────────────────────────────────────────
// Scene 1 — The opening scene. Player picks their character.
// ─────────────────────────────────────────────────────────────
import Scene from "../../components/Scene";

export default function ForestEdge({ goTo, unlockCharisma }) {
  return (
    <Scene
      title="The Forest's Edge"
      text={
        <>
          You stand at the edge of a vast, dark forest. The trees loom tall and twisted,
          their branches blocking out the moon. Somewhere deep within, you can hear
          the faint sound of <em>running water</em> — and something else.
          A low, rhythmic <em>drumming</em>.
          <br /><br />
          You grip your lantern tightly. You're here for a reason, but you can't remember what it is.
          In fact, you can't even remember what your name is. What was it?
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo("masonWakes", undefined, -100000)}>
        Mason Waters
      </button>
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Cameron Gietzen
      </button>
      <button className="choice-btn" onClick={() => { unlockCharisma(); goTo("henryHarkins", 50); }}>
        Henry Harkins
      </button>
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Wes Dayley
      </button>
    </Scene>
  );
}
