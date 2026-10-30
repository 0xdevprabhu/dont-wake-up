# 💤 Don't Wake Up!
### Mobile-First 2D Casual Puzzle Game + Installable PWA

**"Don't Wake Up!"** is a cute, comical, stealth-puzzle casual game built with **Next.js (App Router)** and designed to run smoothly on low-end Android devices as well as modern desktop and tablet browsers.

The player's goal is simple: complete room tasks without making enough noise to wake up **Mr. Snoozy**!

---

## 🎮 Game Concept & Mechanics

- **Main Character:** Mr. Snoozy, a cute round sleeping cartoon character with a nightcap and cozy blanket.
- **Dynamic Character States:**
  1. *Sleeping peacefully* (0–25 noise): Soft breathing, floating `Z Z Z` animations.
  2. *Slightly moving* (26–50 noise): Restless wiggles.
  3. *Hearing noise* (51–75 noise): Twitching ears, inquisitive expressions.
  4. *Becoming suspicious* (76–90 noise): Trembling, sweating, peeking.
  5. *Almost waking up* (91–99 noise): Shivering, alarm warning.
  6. *Fully awake* (100 noise): Comical shock eyes, flailing hands, loud funny yawn/scream, Level Failed!
  7. *Victory State*: Snug and peaceful smile when all objectives are stealthily completed.
- **Noise Meter:** 0 to 100 gauge with real-time color transitions (Green ➔ Yellow ➔ Orange ➔ Red).
- **Stealth Recovery:** Noise cools down gradually when taking a breather.
- **Sound & Haptics:** Procedural Web Audio API sound synthesis and Vibration API. Zero external audio dependencies — 100% offline-ready!
- **Scoring:** 3-Star scoring system based on peak noise, completion speed, and hint usage.
- **Persistence:** LocalStorage automatically tracks unlocked levels, stars, high scores, and sound/music toggles.
- **Grand Finale:** Completing all 20 levels triggers a celebratory victory screen with confetti and 100% completion badge.

---

## 📁 Project Structure

```
dont-wake-up/
├── app/
│   ├── layout.js              # Root layout, viewport, PWA metadata & theme
│   ├── page.js                # Master game state controller & screen router
│   ├── globals.css            # Mobile-first CSS, pastel theme, animations
│   ├── game/page.js           # Direct route for /game?level=N
│   ├── levels/page.js         # Direct route for /levels
│   └── settings/page.js       # Direct route for /settings
├── components/
│   ├── character/
│   │   └── MrSnoozy.js        # SVG cartoon character with 7 animated states
│   ├── game/
│   │   ├── GameBoard.js       # Core reusable gameplay engine
│   │   ├── RoomEnvironment.js # Cartoon room illustrations (Bedroom, Study, etc.)
│   │   ├── InteractiveObject.js # Touch-friendly cartoon objects & animations
│   │   ├── NoiseMeter.js      # Animated 0-100 stealth gauge
│   │   ├── ObjectiveList.js   # Checklist with checkmarks & carry inventory
│   │   ├── GameHUD.js         # Top bar with Back, Title, Sound, Pause
│   │   ├── LevelCompleteModal.js # Win celebration & star rewards
│   │   ├── LevelFailedModal.js   # Comical wake-up defeat screen
│   │   ├── EndingModal.js     # Grand 20-level victory screen
│   │   ├── PauseModal.js      # In-game pause menu
│   │   └── HintModal.js       # Contextual clue popup
│   └── layout/
│       ├── HomeScreen.js      # Main game menu & Play button
│       ├── LevelSelector.js   # 20-level selection grid with stars
│       ├── SettingsScreen.js  # Audio toggles, tutorial, reset confirmation
│       └── InstallAppButton.js # PWA install prompt & Android guide
├── data/
│   └── levels/
│       ├── index.js           # Central level registry & helpers
│       ├── chapter-1.js       # Levels 01 to 10 (Bedroom, Living Room, etc.)
│       └── chapter-2.js       # Levels 11 to 20 (Hallway, Nursery, Grand Finale)
├── lib/
│   ├── audioManager.js        # Procedural Web Audio API sound engine & lullaby music
│   ├── progressManager.js     # LocalStorage state manager
│   ├── scoring.js             # 3-Star scoring and rating algorithm
│   └── pwa.js                 # PWA service worker & beforeinstallprompt handler
├── public/
│   ├── manifest.webmanifest   # PWA manifest
│   ├── sw.js                  # Offline Service Worker cache
│   └── icons/                 # 192x192 and 512x512 app icons (SVG + PNG)
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## 🕹️ 20 Initial Missions

| Level | Title | Environment | Mechanic Introduced |
|-------|-------|-------------|---------------------|
| 01 | Quiet Morning | Bedroom | Basic tapping & item pickup |
| 02 | The Alarm | Bedroom | Fragile/dangerous hazard objects |
| 03 | The Window | Bedroom | Sequential controlled interaction |
| 04 | Hungry Cat | Bedroom | Pet feeding & squeaky decoy toys |
| 05 | Falling Book | Study Room | Timed catch before object crashes |
| 06 | The Door | Doorway | Key collection, lock, handle sequence |
| 07 | The Phone | Bedroom | Multi-step task (jacket ➔ screen ➔ dismiss) |
| 08 | The Hungry Dog | Living Room | Distraction treats & avoid barking triggers |
| 09 | Midnight Snack | Kitchen | Fridge opening, cookie collecting, soft seal |
| 10 | Slipper Mission | Living Room | Object discovery (pairing left + right slippers) |
| 11 | The Squeaky Floor | Hallway | Path selection puzzle (safe vs cracked planks) |
| 12 | Balloon Trouble | Party Room | Careful floating item stashing (avoid cactus) |
| 13 | The Robot | Bedroom | Item combination (find remote under rug to power off) |
| 14 | Rainy Night | Bedroom | Simultaneous noise sources (towel on bucket, window) |
| 15 | The Sleeping Baby | Nursery | Rattle pickup, music box pause, soft drawer push |
| 16 | The Mouse Mission | Kitchen | Moving mouse distraction with cracker crumbs |
| 17 | The Broken Clock | Study Room | Antique desk key, grandfather clock pendulum damper |
| 18 | The Vacuum Cleaner | Living Room | Switch off motor, spool cord, park in closet |
| 19 | Everything Is Noisy! | Bedroom | High-pressure multi-objective noise budget |
| 20 | The Ultimate Quiet Mission | Grand Bedroom | Dim chandelier, feed parrot, disarm trap, master key exit |

---

## 🚀 How to Run Locally

1. Clone or open the repository:
   ```bash
   cd dont-wake-up
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
   To test the mobile experience in Chrome or Edge, open DevTools (`F12`) and toggle the Device Toolbar (`Ctrl+Shift+M` or `Cmd+Shift+M`), selecting **Pixel 7**, **Samsung Galaxy S20**, or **iPhone 14**.

---

## 📦 How to Build for Production

Run the production build:
```bash
npm run build
```

Then start the production server:
```bash
npm start
```

---

## ☁️ How to Deploy to Vercel

Deploying to Vercel is seamless:

### Option 1: Via Vercel CLI
```bash
npx vercel
```

### Option 2: Via Git
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Next.js will be detected automatically. Click **Deploy**.

---

## 📱 How to Install the PWA on Android

1. Open the deployed website or local URL in **Google Chrome for Android**.
2. Tap the **"Install App for Offline Play"** button on the home screen.
3. When the browser prompt appears, tap **Install**.
4. The game will be added directly to your home screen with its custom Mr. Snoozy icon.
5. Launching the game from the home screen opens it in **standalone fullscreen mode** without browser address bars.
6. The Service Worker caches essential assets for smooth offline play!

*If your browser does not support the automated prompt:*
- Tap the **⋮** (three dots) menu in Chrome.
- Tap **"Install app"** or **"Add to Home screen"**.

---

## ➕ How to Add Level 21 and Future Levels

The level architecture is modular and decoupled from React components.

1. Open `data/levels/` and create `chapter-3.js` (for Levels 21–30):
   ```javascript
   export const CHAPTER_3_LEVELS = [
     {
       id: 21,
       chapter: 3,
       title: "Hotel Room Service",
       environment: "bedroom",
       difficulty: "Hard",
       description: "Collect the breakfast tray without clinking the tea cups.",
       noiseLimit: 100,
       noiseDecayRate: 2,
       successMessage: "Delivered in complete silence!",
       hints: ["Move the silver cloche gently."],
       objectives: [
         { id: "lift_cloche", text: "Lift tray cloche", completed: false },
         { id: "place_tray", text: "Place tray on side cart", completed: false }
       ],
       objects: [
         {
           id: "tray_cloche",
           name: "Silver Cloche",
           x: 35,
           y: 55,
           width: 60,
           height: 50,
           type: "pickup",
           givesItem: "tray",
           noise: 8,
           visual: "cookie",
           sound: "pickup",
           completesObjective: "lift_cloche"
         },
         {
           id: "side_cart",
           name: "Room Service Cart",
           x: 75,
           y: 60,
           width: 75,
           height: 70,
           type: "target",
           requiredItem: "tray",
           noise: 10,
           visual: "nightstand",
           sound: "place",
           completesObjective: "place_tray"
         }
       ]
     }
   ];
   ```

2. Register the new chapter in `data/levels/index.js`:
   ```javascript
   import { CHAPTER_1_LEVELS } from './chapter-1.js';
   import { CHAPTER_2_LEVELS } from './chapter-2.js';
   import { CHAPTER_3_LEVELS } from './chapter-3.js';

   export const ALL_LEVELS = [
     ...CHAPTER_1_LEVELS,
     ...CHAPTER_2_LEVELS,
     ...CHAPTER_3_LEVELS
   ];
   ```

3. Level 21 will **automatically appear in the Level Selector grid** and become playable as soon as Level 20 is conquered!

