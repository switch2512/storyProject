
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";

export default function NAME({ goTo }) {
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
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Flex one more time, for the girls <em>way</em> in the back
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Follow the river downstream
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Swim across the river
      </button>
      <br/>
      <span>This was written by: <em>Cameron Gietzen</em></span>
    </Scene>
  );
}
