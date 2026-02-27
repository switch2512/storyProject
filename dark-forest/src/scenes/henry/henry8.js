
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";

export default function henry8({ goTo }) {
  return (
    <Scene
      title="Along the stream"
      text={
        <>
          You and your massive muscles make your way downstream. <br/>
          As you do, your goal starts to come back to you... slowly.
          <br/><br/>
          There have been mysterious disappearances occuring on the outskirts of the village. At first it was just farm animals. Something like a goat would go missing. These first few were easy to write off.
          <br/><br/>
          However, the villagers began to get uneasy when pets started disappearing
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
