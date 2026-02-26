// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry5     from "./henry5"

export default function henry4({ goTo }) {
  return (
    <Scene
      title="WOOHOO!"
      text={
        <>
          You let out a strained <em>"AAAAAAAAHHHH"</em> as you hit a back lat spread pose.
          Your shirt gives one last pitiful rip as it drops to the forest floor. <br />
          It's nothing more than a rag now.<br/>
          You've got a gnarly pump going. Your look like one big muscle with a tiny head.
          <br /><br />
          "Henry Fricken Harkins" you say out loud.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(henry5, 50)}>
        Flex one more time, for the girls <em>WAAAAAAAAAAAAAAAY</em> in the back
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
