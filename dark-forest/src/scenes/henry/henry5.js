// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry6 from "./henry6"

export default function henry5({ goTo, applyCharisma }) {
  return (
    <Scene
      title="AAAAAAAAAAAAAHHHHH"
      text={
        <>
          You flex all over. With your shirt gone, you feel free and unrestrited. <br/>
          Your shorts are now stretched to their <em>breaking</em> point. <br/>
          <br /><br />
          But hey, there's probably no one around. Maybe just one more? 
        </>
      }
    >
      <button className="choice-btn" onClick={() => {goTo(henry6, 50); applyCharisma(-10)}}>
        Flex one more time, this time for you
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
