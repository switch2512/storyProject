// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry4 from "./henry4"

export default function henry3({ goTo }) {
  return (
    <Scene
      title="DAMN you're swoll"
      text={
        <>
          You hit a side chest pose. <br/>
          <em>RIIIIIP</em>. Your shirt is barely holding together and you're starting to prespire.
          <br /><br />
          "Hard Fricken Harkins," you mouth to yourself.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(henry4, 50)}>
        Flex one more time, for the girls <em>waaaaaay</em> in the back
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Follow the river downstream
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Swim across the river
      </button>
    </Scene>
  );
}
