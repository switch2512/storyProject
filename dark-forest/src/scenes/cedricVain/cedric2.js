
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";

export default function cedric2({ goTo }) {
  return (
    <Scene
      title="The Door"
      text={
        <>
          After a long walk, you arrive at the source of the sound: a <em>large</em>, ebon door, gilded with a kind of metal you haven’t seen anywhere else on the ship. As you reach for the handle, you feel a portentous energy emanating from the immense portal. 
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Retract your arm and turn around
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Continue reaching and attempt to open the door.
      </button>
      <br/>
      <span>This was written by: <em>Mason Waters</em></span>
    </Scene>
  );
}
