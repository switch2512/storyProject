// scenes/henry/HenryHarkins.js
// ─────────────────────────────────────────────────────────────
// Henry Harkins branch — Scene 1
// Henry remembers who he is. He is hard.
// ─────────────────────────────────────────────────────────────
import Scene      from "../../components/Scene";
import { SUGGESTION_URL } from "../../constants";

export default function henry7({ goTo, restart }) {
  return (
    <Scene
      title="Oops"
      text={
        <>
          You flex again, your muscles straining<br/><br/>
          <em>BOOM!</em><br/><br/>
          An explosion echoes through the forest. <br/>
          Nothing remains of Hard Henry Harkins except a cloud of pink mist...<br/>
          And a very becoming loin cloth.
        </>
      }
    >
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button className="restart-btn" onClick={restart}>
                Play Again
              </button>
              <button
                className="restart-btn"
                style={{ marginLeft: "12px" }}
                onClick={() => window.open(SUGGESTION_URL)}
              >
                Make a Suggestion!
              </button>
            </div>
    </Scene>
  );
}
