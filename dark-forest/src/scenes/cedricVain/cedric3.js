
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";
import cedric4 from "./cedric4"

export default function cedric3({ goTo }) {
  return (
    <Scene
      title="Inside the Maintenance Chamber"
      text={
        <>
          You head towards the maintenance chamber. Crewmembers are <em>frantically</em> racing around. None of them respond to your repeated inquiries about what is going on. Undaunted, you continue towards the maintenance chamber.<br/>
          Upon reaching the maintenance chamber, your stomach <em>sinks</em>. Something is clearly wrong with the ship’s Venerate Scion. Its breathing is <em>stilted</em>, and its light–which is usually painfully bright—is feeble and sickly. 
          <br/><br/>
          Among the millions of crewmembers aboard the Nachtsucher, only five possess the arcane knowledge required to address this problem. You are <em>not</em> one of them. 
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(cedric4)}>
        Set out to find one of the five Prolocutors.
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Address the Venerate Scion and ask it what is wrong.
      </button>
      <br/>
      <span>This was written by: <em>Mason Waters</em></span>
    </Scene>
  );
}
