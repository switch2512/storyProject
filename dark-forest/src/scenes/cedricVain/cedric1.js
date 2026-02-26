
import Scene      from "../../components/Scene";
import cedric2 from "./cedric2"
import cedric3 from "./cedric3"

export default function cedric1({ goTo }) {
  return (
    <Scene
      title="You Wake Up"
      text={
        <>
          You wake up in your neural pod, greeted by the cacophonous <em>roar</em> of alarms and warning signals.<br/>
          Among the symphony is a sound you have not heard before. 
          <br/><br/>
          You leave your pod. The hallway directly outside of the resting chamber leads in only two directions.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(cedric2)}>
        Turn right and follow the sound
      </button>
      <button className="choice-btn" onClick={() => goTo(cedric3)}>
        Turn left and head to the maintenance chamber
      </button>
      <br/>
      <span>This was written by: <em>Mason Waters</em></span>
    </Scene>
  );
}
