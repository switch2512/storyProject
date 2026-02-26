// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import henry7 from "./henry7"

export default function henry6({ goTo }) {
  return (
    <Scene
      title="NNNNUUUUUUUUHHH"
      text={
        <>
          You flex again.<br/>
          Your shorts <em>snap</em> all at once, leaving you in nothing but a loin cloth. <br/>
          But <em>damn</em>, you make that loin cloth look <em>good</em>.
          <br /><br />
          However, your muscles have grown so big that you're having trouble moving freely.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(henry7, -100000)}>
        Just oooooooooooone more
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
