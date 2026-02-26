// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry3 from "./henry3"

export default function henry2({ goTo }) {
  return (
    <Scene
      title="Hell Yeaaaa"
      text={
        <>
          You hit the front double bicep pose.<br/>
          The sound of ripping fabric tears through the silence of the forest.
          <br /><br />
          That's right. Fricken <em>Hard</em> Henry Harkins.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(henry3, 50)}>
        Flex one more time, for the girls <em>way</em> in the back
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
