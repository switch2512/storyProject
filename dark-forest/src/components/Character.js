

export default function Enemy({ character }) {
    if (character) {
        return (
            <>
            <div className="enemy-panel">

                {/* Enemy image — supply an image prop to fill this */}
                <div className="enemy-image-box">
                    <img src={`${process.env.PUBLIC_URL}/characters/${character}.png`} alt={character} />
                </div>

                {/* Enemy name */}
                <div className="scene-title" style={{ marginBottom: 0, textAlign: "center" }}>
                {character}
                </div>
            </div>
            </>
        );
    } else return null;


}
