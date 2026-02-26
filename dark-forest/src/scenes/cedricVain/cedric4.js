
import Scene      from "../../components/Scene";
import ComingSoon from "../ComingSoon";

export default function cedric4({ goTo }) {
  return (
    <Scene
      title="Hell Yeaaaa"
      text={
        <>
          As you attempt to leave, you feel yourself <em>unable</em> to move. The door will not allow it. Mustering the strength to press forward, you head towards the maintenance chamber. Before you can get there, a crewmate you’ve never seen before stops you. Without speaking, he hands you a small metallic cylinder. When it touches your palm, for a brief moment an image of a <em>great leviathan</em> appears in your mind. 
          <br/><br/>
          Though it lasted only an instant, you somehow knew that whatever unfathomable creature you just saw…<em>imagined</em>… saw <em>you</em> as well. You shake the thought and head towards the maintenance chamber. 
          <br/><br/>
          When you reach the entrance, you find the door is <em>locked</em>. However, you notice a small hole located directly in the center of the door. It looks to be the size of the <em>mysterious cylinder</em>.
        </>
      }
    >
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Insert the cylinder into the door.
      </button>
      <button className="choice-btn" onClick={() => goTo(ComingSoon)}>
        Abandon the chamber and continue down the deck.
      </button>
      <br/>
      <span>This was written by: <em>Mason Waters</em></span>
    </Scene>
  );
}
