# The Dark Forest — React App

## Setup

1. **Create a new React app:**
   ```bash
   npx create-react-app dark-forest
   cd dark-forest
   ```

2. **Replace the `src/` folder** entirely with the provided `src/` folder.

3. **Run locally:**
   ```bash
   npm start
   ```

---

## Project Structure

```
src/
├── App.js                        ← Root: manages all state & scene routing
├── App.css                       ← All styles
├── components/
│   ├── Scene.js                  ← Reusable scene layout wrapper
│   ├── Popup.js                  ← Stat change / alert popup
│   └── StatsBar.js               ← Health / Gold / Charisma display
└── scenes/
    ├── start/
    │   └── ForestEdge.js         ← Opening scene (character select)
    ├── mason/
    │   └── MasonWakes.js         ← Mason Waters branch
    ├── henry/
    │   └── HenryHarkins.js       ← Henry Harkins branch
    └── shared/
        └── ComingSoon.js         ← Placeholder for unfinished scenes
```

---

## Adding a New Scene

**Step 1 — Create the file:**
```jsx
// src/scenes/mason/MasonAtSchool.js
import Scene from "../../components/Scene";

export default function MasonAtSchool({ goTo }) {
  return (
    <Scene
      title="Late Again"
      text={<>You burst through the door. Everyone stares. <em>Classic Mason.</em></>}
    >
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Apologize profusely
      </button>
      <button className="choice-btn" onClick={() => goTo("comingSoon")}>
        Play it cool
      </button>
    </Scene>
  );
}
```

**Step 2 — Register it in `App.js`:**
```js
// Add the import at the top
import MasonAtSchool from "./scenes/mason/MasonAtSchool";

// Add it to the sceneMap
const sceneMap = {
  ...
  masonAtSchool: MasonAtSchool,
};
```

**Step 3 — Link to it from another scene:**
```jsx
<button className="choice-btn" onClick={() => goTo("masonAtSchool")}>
  Jump out of bed and rush to school
</button>
```

---

## goTo() Parameters

```js
goTo(sceneId, healthChange, moneyChange)
```

| Parameter     | Type   | Description                          |
|---------------|--------|--------------------------------------|
| `sceneId`     | string | Key from sceneMap in App.js          |
| `healthChange`| number | Optional. e.g. `-20` or `50`         |
| `moneyChange` | number | Optional. e.g. `-100000`             |

---

## Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/dark-forest",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/yourusername/dark-forest.git
git push -u origin main
npm run deploy
```
