// scenes/start/ForestEdge.js
// ─────────────────────────────────────────────────────────────
// Scene 1 — The opening scene. Player picks their character.
// ─────────────────────────────────────────────────────────────
import Scene       from "../../components/Scene";
import MasonWakes  from "../mason/MasonWakes";
import HenryHarkins from "../henry/HenryHarkins";
import cedricVain from "../cedricVain/cedric1"
import ComingSoon  from "../ComingSoon";

export default function ForestEdge({ goTo, unlockCharisma, newTitle }) {
  return (
    <Scene
      title="The Forest's Edge"
      text={
        <>
          You stand at the edge of a vast, dark forest. The trees loom tall and twisted,
          their branches blocking out the moon. Somewhere deep within, you can hear
          the faint sound of <em>running water</em> — and something else.
          A low, rhythmic <em>drumming</em>.
          <br/><br/>
          You grip your lantern tightly. You're here for a reason, but you can't remember what it is.<br />
          In fact, you can't even remember what your name is. 
          <br/><br/>
          The darkness of the forest seems to leak from between the trees.<br/>
          Its tendrils swirl, closing in from all sides. What was your <em>name</em>?
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(MasonWakes, undefined, -100000)}>
        Mason Waters
      </button>
      <button className="choice-btn" onClick={() => { goTo(cedricVain); newTitle("Establishment Space")}}>
        Cedric Vain
      </button>
      <button className="choice-btn" onClick={() => { unlockCharisma(); goTo(HenryHarkins, +50); newTitle("The Hard Adventures of Hard Henry Harkins")}}>
        Henry Harkins
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Wes Dayley
      </button>
    </Scene>
  );
}
