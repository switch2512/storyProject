// scenes/mason/MasonWakes.js
// ─────────────────────────────────────────────────────────────
// Mason Waters branch — Scene 1
// Mason wakes up late for school.
// ─────────────────────────────────────────────────────────────
import Scene from "../../components/Scene";

export default function MasonWakes({ goTo }) {
  return (
    <Scene
      title="You Wake Up"
      text={
        <>
          <br />
          Your alarm is <em>blaring</em>. The grey of twilight dimly lights the room.<br />
          Shit. You're late for school, you haven't done the reading, ...<em>and you're on call!</em>
          <br /><br />
          Ya got no gumption.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Slap the snooze button and go back to sleep
      </button>
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Jump out of bed and rush to school
      </button>
    </Scene>
  );
}
