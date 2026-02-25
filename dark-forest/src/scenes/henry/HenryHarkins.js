// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry1 from "./henry1";

export default function HenryHarkins({ goTo }) {
  return (
    <Scene
      title="You Remember Now"
      text={
        <>
          That's right. You're fricken <em>Hard</em> Henry Harkins.<br />
          You regrip your lantern, flexing.<br />
          Your shirt strains then <em>rips</em> as your muscles <em>bulge</em>.
          <br /><br />
          Who dah man? You dah man.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(henry1, 50)}>
        Flex one more time, for the girls in the back
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
