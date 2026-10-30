// Chapter 2: Levels 11 to 20
// Hallway, Party Room, Nursery, Study, Kitchen, Grand Bedroom

export const CHAPTER_2_LEVELS = [
  // ==========================================
  // LEVEL 11 – The Squeaky Floor
  // ==========================================
  {
    id: 11,
    chapter: 2,
    title: "The Squeaky Floor",
    environment: "hallway",
    difficulty: "Medium",
    description: "The old hallway floor is full of loose boards. Step only on the solid golden planks to reach the exit door!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Tiptoe master! Crossed the creaky hallway without a sound.",
    hints: [
      "Follow the clean, uncracked wooden planks.",
      "Plank 1 (Left) -> Plank 2 (Center) -> Plank 3 (Right) -> Exit Door.",
      "Stay away from planks with dark wood cracks!"
    ],
    objectives: [
      { id: "step_tile_1", text: "Step on safe plank 1", completed: false },
      { id: "step_tile_2", text: "Step on safe plank 2", completed: false },
      { id: "step_tile_3", text: "Step on safe plank 3", completed: false },
      { id: "reach_exit", text: "Open the exit door", completed: false }
    ],
    objects: [
      {
        id: "safe_tile_1",
        name: "Solid Oak Plank",
        x: 25,
        y: 74,
        width: 65,
        height: 38,
        type: "puzzle_step",
        stepOrder: 1,
        noise: 4,
        visual: "wood_tile_solid",
        sound: "click",
        tooltip: "Looks solid and quiet",
        completesObjective: "step_tile_1"
      },
      {
        id: "creaky_tile_a",
        name: "Cracked Plank",
        x: 65,
        y: 74,
        width: 65,
        height: 38,
        type: "danger",
        noise: 38,
        visual: "wood_tile_cracked",
        sound: "loud",
        tooltip: "Has a big visible split! CREEEAK!"
      },
      {
        id: "safe_tile_2",
        name: "Solid Pine Plank",
        x: 48,
        y: 56,
        width: 65,
        height: 38,
        type: "puzzle_step",
        stepOrder: 2,
        requiresObjective: "step_tile_1",
        noise: 4,
        visual: "wood_tile_solid",
        sound: "click",
        tooltip: "Smooth and silent",
        completesObjective: "step_tile_2"
      },
      {
        id: "creaky_tile_b",
        name: "Loose Squeaky Tile",
        x: 18,
        y: 56,
        width: 65,
        height: 38,
        type: "danger",
        noise: 38,
        visual: "wood_tile_cracked",
        sound: "loud",
        tooltip: "Loose nail sticking out!"
      },
      {
        id: "safe_tile_3",
        name: "Solid Maple Plank",
        x: 72,
        y: 40,
        width: 65,
        height: 38,
        type: "puzzle_step",
        stepOrder: 3,
        requiresObjective: "step_tile_2",
        noise: 4,
        visual: "wood_tile_solid",
        sound: "click",
        tooltip: "Firmly nailed down",
        completesObjective: "step_tile_3"
      },
      {
        id: "hallway_exit_door",
        name: "Exit Door",
        x: 48,
        y: 18,
        width: 65,
        height: 85,
        type: "toggle",
        requiresObjective: "step_tile_3",
        noise: 10,
        visual: "exit_door",
        sound: "place",
        tooltip: "Exit into the next room",
        completesObjective: "reach_exit"
      }
    ]
  },

  // ==========================================
  // LEVEL 12 – Balloon Trouble
  // ==========================================
  {
    id: 12,
    chapter: 2,
    title: "Balloon Trouble",
    environment: "party_room",
    difficulty: "Medium",
    description: "Three helium balloons are drifting toward a spiky cactus! Catch and stash each in the soft laundry basket.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "All balloons secured in the basket! Zero loud pops.",
    hints: [
      "Tap each floating balloon carefully to put it into the basket.",
      "Stay away from the pointy cactus spines on the table!"
    ],
    objectives: [
      { id: "balloon_red", text: "Secure red balloon", completed: false },
      { id: "balloon_blue", text: "Secure blue balloon", completed: false },
      { id: "balloon_yellow", text: "Secure yellow balloon", completed: false }
    ],
    objects: [
      {
        id: "balloon_1",
        name: "Ruby Balloon",
        x: 24,
        y: 35,
        width: 55,
        height: 75,
        type: "toggle",
        visual: "balloon_red",
        noise: 8,
        sound: "pickup",
        tooltip: "Catch the red balloon",
        completesObjective: "balloon_red"
      },
      {
        id: "balloon_2",
        name: "Sky Blue Balloon",
        x: 52,
        y: 28,
        width: 55,
        height: 75,
        type: "toggle",
        visual: "balloon_blue",
        noise: 8,
        sound: "pickup",
        tooltip: "Catch the blue balloon",
        completesObjective: "balloon_blue"
      },
      {
        id: "balloon_3",
        name: "Sunny Yellow Balloon",
        x: 76,
        y: 40,
        width: 55,
        height: 75,
        type: "toggle",
        visual: "balloon_yellow",
        noise: 8,
        sound: "pickup",
        tooltip: "Catch the yellow balloon",
        completesObjective: "balloon_yellow"
      },
      {
        id: "balloon_basket",
        name: "Soft Foam Basket",
        x: 35,
        y: 72,
        width: 80,
        height: 60,
        type: "safe",
        visual: "basket",
        noise: 0,
        sound: "place",
        tooltip: "Safe landing basket"
      },
      {
        id: "cactus",
        name: "Spiky Prickly Cactus",
        x: 82,
        y: 65,
        width: 50,
        height: 70,
        type: "danger",
        visual: "cactus",
        noise: 55,
        sound: "loud",
        tooltip: "Sharp spines! POP!!"
      }
    ]
  },

  // ==========================================
  // LEVEL 13 – The Robot
  // ==========================================
  {
    id: 13,
    chapter: 2,
    title: "The Robot",
    environment: "bedroom",
    difficulty: "Medium",
    description: "A wind-up toy robot is whirring and beeping on the floor. Find its remote control and power it down!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Beep-boop... robot shut down. Peace is restored!",
    hints: [
      "Look under the colorful bedside rug to find the toy remote.",
      "Use the remote on the beeping robot to shut it off.",
      "Don't trip over the metal trash can!"
    ],
    objectives: [
      { id: "find_remote", text: "Find the robot remote control", completed: false },
      { id: "power_off_robot", text: "Switch off the noisy robot", completed: false }
    ],
    objects: [
      {
        id: "rug_corner",
        name: "Fluffy Rug",
        x: 24,
        y: 68,
        width: 75,
        height: 55,
        type: "pickup",
        givesItem: "robot_remote",
        noise: 6,
        visual: "remote_under_rug",
        sound: "pickup",
        tooltip: "Lift rug corner to take remote",
        completesObjective: "find_remote"
      },
      {
        id: "toy_robot",
        name: "Beeping Toy Robot",
        x: 65,
        y: 64,
        width: 65,
        height: 75,
        type: "target",
        requiredItem: "robot_remote",
        noise: 10,
        visual: "robot_active",
        sound: "click",
        tooltip: "Point remote to switch off",
        completesObjective: "power_off_robot"
      },
      {
        id: "metal_trash_can",
        name: "Metal Wastebin",
        x: 86,
        y: 48,
        width: 45,
        height: 60,
        type: "danger",
        visual: "metal_bin",
        noise: 46,
        sound: "loud",
        tooltip: "Hollow tin! BANGS if bumped!"
      }
    ]
  },

  // ==========================================
  // LEVEL 14 – Rainy Night
  // ==========================================
  {
    id: 14,
    chapter: 2,
    title: "Rainy Night",
    environment: "bedroom",
    difficulty: "Hard",
    description: "Rain is dripping onto a hollow tin bucket, wind is howling, and a flower pot is about to blow over!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Cozy and dry! Rain noise silenced completely.",
    hints: [
      "Pick up the thick bath towel on the chair.",
      "Wrap towel over the tin bucket to muffle drips.",
      "Close the rattling window.",
      "Bring the flower pot safely onto the desk."
    ],
    objectives: [
      { id: "get_towel", text: "Pick up the soft towel", completed: false },
      { id: "muffle_bucket", text: "Muffle water dripping in bucket", completed: false },
      { id: "close_rain_window", text: "Close the rainy window", completed: false },
      { id: "save_pot", text: "Move flower pot away from rain", completed: false }
    ],
    objects: [
      {
        id: "chair_towel",
        name: "Soft Cotton Towel",
        x: 20,
        y: 55,
        width: 55,
        height: 55,
        type: "pickup",
        givesItem: "soft_towel",
        noise: 4,
        visual: "towel",
        sound: "pickup",
        tooltip: "Take absorbent towel",
        completesObjective: "get_towel"
      },
      {
        id: "tin_bucket",
        name: "Dripping Tin Bucket",
        x: 42,
        y: 68,
        width: 60,
        height: 55,
        type: "target",
        requiredItem: "soft_towel",
        noise: 8,
        visual: "dripping_bucket",
        sound: "place",
        tooltip: "Muffle the plink-plink drips!",
        completesObjective: "muffle_bucket"
      },
      {
        id: "stormy_window",
        name: "Rattling Window",
        x: 72,
        y: 25,
        width: 75,
        height: 85,
        type: "toggle",
        noise: 14,
        visual: "window_rain",
        sound: "place",
        tooltip: "Latch window against storm",
        completesObjective: "close_rain_window"
      },
      {
        id: "flower_pot",
        name: "Balcony Flower Pot",
        x: 82,
        y: 60,
        width: 48,
        height: 55,
        type: "toggle",
        requiresObjective: "close_rain_window",
        noise: 8,
        visual: "flower_pot",
        sound: "pickup",
        tooltip: "Move pot to sturdy desk",
        completesObjective: "save_pot"
      }
    ]
  },

  // ==========================================
  // LEVEL 15 – The Sleeping Baby
  // ==========================================
  {
    id: 15,
    chapter: 2,
    title: "The Sleeping Baby",
    environment: "nursery",
    difficulty: "Hard",
    description: "In the cozy nursery, quiet the tinkling music box, pick up the dropped rattle, and gently close the open drawer.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Both Mr. Snoozy and baby are in deep, peaceful dreamland.",
    hints: [
      "Pick up the plastic rattle from the carpet carefully.",
      "Tap the music box crank to pause the tune.",
      "Gently slide the wooden dresser drawer closed.",
      "Do NOT press the squeaky rubber duck!"
    ],
    objectives: [
      { id: "pickup_rattle", text: "Pick up the dropped rattle toy", completed: false },
      { id: "stop_music_box", text: "Switch off the music box", completed: false },
      { id: "close_drawer", text: "Slide the nursery drawer closed", completed: false }
    ],
    objects: [
      {
        id: "baby_rattle",
        name: "Soft Rattle",
        x: 25,
        y: 72,
        width: 45,
        height: 45,
        type: "pickup",
        givesItem: "rattle",
        noise: 6,
        visual: "rattle",
        sound: "pickup",
        tooltip: "Pick up quietly",
        completesObjective: "pickup_rattle"
      },
      {
        id: "music_box",
        name: "Wind-up Music Box",
        x: 52,
        y: 42,
        width: 55,
        height: 50,
        type: "toggle",
        noise: 10,
        visual: "music_box_playing",
        sound: "click",
        tooltip: "Gently stop the music crank",
        completesObjective: "stop_music_box"
      },
      {
        id: "dresser_drawer",
        name: "Open Dresser Drawer",
        x: 78,
        y: 54,
        width: 70,
        height: 50,
        type: "toggle",
        noise: 10,
        visual: "drawer_open",
        sound: "place",
        tooltip: "Slide drawer shut softly",
        completesObjective: "close_drawer"
      },
      {
        id: "rubber_duck",
        name: "Yellow Rubber Duck",
        x: 35,
        y: 52,
        width: 45,
        height: 45,
        type: "danger",
        visual: "rubber_duck",
        noise: 45,
        sound: "loud",
        tooltip: "Loud high-pitched squeaker!"
      }
    ]
  },

  // ==========================================
  // LEVEL 16 – The Mouse Mission
  // ==========================================
  {
    id: 16,
    chapter: 2,
    title: "The Mouse Mission",
    environment: "kitchen",
    difficulty: "Hard",
    description: "A speedy little mouse is eyeing the cheese on the kitchen counter! Distract it with cracker crumbs and stash the cheese safely.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Mouse is happily eating crumbs, and the cheese is safe in the pantry!",
    hints: [
      "Get tasty cracker crumbs from the snack box.",
      "Place crumbs near the mouse hole in the corner.",
      "While mouse is distracted, snatch the cheese and close the cupboard."
    ],
    objectives: [
      { id: "get_crackers", text: "Take cracker crumbs from box", completed: false },
      { id: "distract_mouse", text: "Distract the curious mouse", completed: false },
      { id: "secure_cheese", text: "Collect the cheese wedge", completed: false },
      { id: "close_cupboard", text: "Close cupboard door", completed: false }
    ],
    objects: [
      {
        id: "cracker_box",
        name: "Cracker Box",
        x: 20,
        y: 50,
        width: 50,
        height: 60,
        type: "pickup",
        givesItem: "crackers",
        noise: 6,
        visual: "cracker_box",
        sound: "pickup",
        tooltip: "Grab cracker crumbs",
        completesObjective: "get_crackers"
      },
      {
        id: "mouse_hole",
        name: "Mouse Hole Corner",
        x: 82,
        y: 74,
        width: 60,
        height: 45,
        type: "target",
        requiredItem: "crackers",
        noise: 6,
        visual: "mouse_nibbling",
        sound: "place",
        tooltip: "Place crumbs to distract mouse",
        completesObjective: "distract_mouse"
      },
      {
        id: "cheese_wedge",
        name: "Swiss Cheese",
        x: 48,
        y: 48,
        width: 50,
        height: 45,
        type: "pickup",
        requiresObjective: "distract_mouse",
        givesItem: "cheese",
        noise: 6,
        visual: "cheese",
        sound: "pickup",
        tooltip: "Snatch the cheese safely",
        completesObjective: "secure_cheese"
      },
      {
        id: "cupboard_door",
        name: "Pantry Cupboard",
        x: 52,
        y: 28,
        width: 65,
        height: 65,
        type: "toggle",
        requiresObjective: "secure_cheese",
        noise: 10,
        visual: "cupboard",
        sound: "place",
        tooltip: "Close pantry shut",
        completesObjective: "close_cupboard"
      },
      {
        id: "copper_pans",
        name: "Hanging Copper Skillets",
        x: 75,
        y: 22,
        width: 60,
        height: 55,
        type: "danger",
        visual: "copper_pans",
        noise: 60,
        sound: "loud",
        tooltip: "GONG! Metal cymbals!"
      }
    ]
  },

  // ==========================================
  // LEVEL 17 – The Broken Clock
  // ==========================================
  {
    id: 17,
    chapter: 2,
    title: "The Broken Clock",
    environment: "study",
    difficulty: "Hard",
    description: "The antique pendulum clock is ticking with ferocious clacks! Find its winding key and steady the pendulum without breaking the vase.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Pendulum cushioned. Sweet soothing quiet fills the study.",
    hints: [
      "Open the antique desk drawer to find the brass clock key.",
      "Use key on the grandfather clock access hatch.",
      "Fasten the soft felt damper to quiet the pendulum.",
      "Watch out for the fragile porcelain vase!"
    ],
    objectives: [
      { id: "find_clock_key", text: "Find the clock winding key", completed: false },
      { id: "open_clock_hatch", text: "Unlock clock pendulum hatch", completed: false },
      { id: "silence_pendulum", text: "Steady the ticking pendulum", completed: false }
    ],
    objects: [
      {
        id: "desk_drawer",
        name: "Study Desk Drawer",
        x: 24,
        y: 60,
        width: 65,
        height: 50,
        type: "pickup",
        givesItem: "clock_key",
        noise: 8,
        visual: "drawer_key",
        sound: "pickup",
        tooltip: "Pull open drawer to take key",
        completesObjective: "find_clock_key"
      },
      {
        id: "clock_hatch",
        name: "Pendulum Hatch",
        x: 55,
        y: 45,
        width: 55,
        height: 80,
        type: "target",
        requiredItem: "clock_key",
        noise: 10,
        visual: "clock_ticking",
        sound: "click",
        tooltip: "Insert key to open hatch",
        completesObjective: "open_clock_hatch"
      },
      {
        id: "pendulum_damper",
        name: "Felt Damper",
        x: 55,
        y: 52,
        width: 45,
        height: 45,
        type: "toggle",
        requiresObjective: "open_clock_hatch",
        noise: 8,
        visual: "clock_silent",
        sound: "place",
        tooltip: "Steady the swinging pendulum",
        completesObjective: "silence_pendulum"
      },
      {
        id: "porcelain_vase",
        name: "Dynasty Porcelain Vase",
        x: 78,
        y: 42,
        width: 45,
        height: 65,
        type: "danger",
        visual: "porcelain_vase",
        noise: 58,
        sound: "loud",
        tooltip: "Ultra delicate! Shatters loudly!"
      }
    ]
  },

  // ==========================================
  // LEVEL 18 – The Vacuum Cleaner
  // ==========================================
  {
    id: 18,
    chapter: 2,
    title: "The Vacuum Cleaner",
    environment: "living_room",
    difficulty: "Hard",
    description: "Someone left the robot vacuum motor humming! Unplug the wall socket, spool the cord, and roll it away to the hallway closet.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Humming stopped! Vacuum parked silently in the closet.",
    hints: [
      "Click the red power toggle on the vacuum base.",
      "Gently press the cord rewind pedal.",
      "Push the vacuum into the storage closet.",
      "Careful with the acoustic guitar leaning on the wall!"
    ],
    objectives: [
      { id: "toggle_vacuum_off", text: "Switch off vacuum power", completed: false },
      { id: "rewind_cord", text: "Spool the power cord", completed: false },
      { id: "park_vacuum", text: "Roll vacuum to closet", completed: false }
    ],
    objects: [
      {
        id: "vacuum_switch",
        name: "Vacuum Power Button",
        x: 48,
        y: 60,
        width: 65,
        height: 60,
        type: "toggle",
        visual: "vacuum_humming",
        noise: 10,
        sound: "click",
        tooltip: "Tap switch to kill motor",
        completesObjective: "toggle_vacuum_off"
      },
      {
        id: "cord_pedal",
        name: "Cord Reel Button",
        x: 42,
        y: 68,
        width: 45,
        height: 35,
        type: "toggle",
        requiresObjective: "toggle_vacuum_off",
        noise: 12,
        visual: "vacuum_cord",
        sound: "place",
        tooltip: "Tuck cord in",
        completesObjective: "rewind_cord"
      },
      {
        id: "closet_door",
        name: "Storage Closet",
        x: 82,
        y: 35,
        width: 60,
        height: 95,
        type: "toggle",
        requiresObjective: "rewind_cord",
        noise: 12,
        visual: "closet",
        sound: "place",
        tooltip: "Park vacuum inside closet",
        completesObjective: "park_vacuum"
      },
      {
        id: "guitar",
        name: "Acoustic Guitar",
        x: 18,
        y: 45,
        width: 50,
        height: 80,
        type: "danger",
        visual: "guitar",
        noise: 50,
        sound: "loud",
        tooltip: "TWANGGG! Strings vibrate like thunder!"
      }
    ]
  },

  // ==========================================
  // LEVEL 19 – Everything Is Noisy!
  // ==========================================
  {
    id: 19,
    chapter: 2,
    title: "Everything Is Noisy!",
    environment: "bedroom",
    difficulty: "Very Hard",
    description: "Total chaos! The alarm is ringing, the draft is slamming the window, and a toy is buzzing. Silence them all with minimal noise!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Incredible focus! Neutralized all three chaos sources.",
    hints: [
      "1. Tap the buzzing alarm clock immediately.",
      "2. Catch and latch the slamming window.",
      "3. Switch off the rolling toy robot.",
      "4. Snatch the golden exit key!"
    ],
    objectives: [
      { id: "silence_alarm_19", text: "Stop the alarm clock", completed: false },
      { id: "latch_window_19", text: "Close slamming window", completed: false },
      { id: "off_robot_19", text: "Switch off the robot", completed: false },
      { id: "grab_master_key", text: "Collect the room key", completed: false }
    ],
    objects: [
      {
        id: "alarm_19",
        name: "Ringing Alarm",
        x: 20,
        y: 45,
        width: 55,
        height: 55,
        type: "toggle",
        visual: "alarm_ringing",
        noise: 12,
        sound: "click",
        tooltip: "Tap to stop ringing",
        completesObjective: "silence_alarm_19"
      },
      {
        id: "window_19",
        name: "Slamming Window",
        x: 50,
        y: 25,
        width: 70,
        height: 75,
        type: "toggle",
        noise: 14,
        visual: "window_open",
        sound: "place",
        tooltip: "Pull and latch shut",
        completesObjective: "latch_window_19"
      },
      {
        id: "robot_19",
        name: "Buzzing Robot",
        x: 75,
        y: 65,
        width: 60,
        height: 65,
        type: "toggle",
        noise: 14,
        visual: "robot_active",
        sound: "click",
        tooltip: "Flip the power switch",
        completesObjective: "off_robot_19"
      },
      {
        id: "key_19",
        name: "Master Key",
        x: 35,
        y: 72,
        width: 48,
        height: 48,
        type: "pickup",
        requiresObjective: "off_robot_19",
        givesItem: "master_key",
        noise: 6,
        visual: "golden_key",
        sound: "pickup",
        tooltip: "Pick up the master key",
        completesObjective: "grab_master_key"
      },
      {
        id: "creaky_floor_hazard",
        name: "Trap Floorboard",
        x: 60,
        y: 78,
        width: 70,
        height: 35,
        type: "danger",
        visual: "creaky_wood",
        noise: 42,
        sound: "loud",
        tooltip: "Very loose board!"
      }
    ]
  },

  // ==========================================
  // LEVEL 20 – The Ultimate Quiet Mission
  // ==========================================
  {
    id: 20,
    chapter: 2,
    title: "The Ultimate Quiet Mission",
    environment: "grand_bedroom",
    difficulty: "Master",
    description: "The grand finale! Dim the chandelier, feed the snoozing parrot, disarm the squeak trap, unlock the oak door, and escape unseen!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "YOU DID IT! 20 LEVELS COMPLETED! Mr. Snoozy never stirred even once!",
    isGrandFinale: true,
    hints: [
      "1. Gently dim the chandelier dial on the left wall.",
      "2. Feed the parrot a cashew nut so it stays quiet.",
      "3. Disarm the hallway wire trap.",
      "4. Take the velvet master key.",
      "5. Unlock the grand double doors and escape!"
    ],
    objectives: [
      { id: "dim_light", text: "Dim the chandelier lamp", completed: false },
      { id: "get_nut", text: "Pick up cashew nut", completed: false },
      { id: "feed_parrot", text: "Quiet the sleepy parrot", completed: false },
      { id: "disarm_trap", text: "Disarm the squeaky hallway trap", completed: false },
      { id: "get_final_key", text: "Grab velvet master key", completed: false },
      { id: "escape_door", text: "Unlock and step through exit", completed: false }
    ],
    objects: [
      {
        id: "dimmer_switch",
        name: "Rotary Light Dimmer",
        x: 15,
        y: 38,
        width: 45,
        height: 50,
        type: "toggle",
        visual: "dimmer",
        noise: 8,
        sound: "click",
        tooltip: "Turn dial to soft nightlight",
        completesObjective: "dim_light"
      },
      {
        id: "nut_bowl",
        name: "Bowl of Cashews",
        x: 25,
        y: 62,
        width: 48,
        height: 40,
        type: "pickup",
        givesItem: "cashew_nut",
        noise: 4,
        visual: "cashew",
        sound: "pickup",
        tooltip: "Take a nut treat",
        completesObjective: "get_nut"
      },
      {
        id: "parrot_perch",
        name: "Pepe the Parrot",
        x: 82,
        y: 32,
        width: 60,
        height: 70,
        type: "target",
        requiredItem: "cashew_nut",
        noise: 6,
        visual: "parrot",
        sound: "place",
        tooltip: "Offer nut so Pepe doesn't squawk",
        completesObjective: "feed_parrot"
      },
      {
        id: "tripwire_trap",
        name: "Squeaky Floor Trap",
        x: 48,
        y: 72,
        width: 65,
        height: 38,
        type: "toggle",
        requiresObjective: "feed_parrot",
        noise: 8,
        visual: "disarm_tool",
        sound: "click",
        tooltip: "Disarm the squeaker softly",
        completesObjective: "disarm_trap"
      },
      {
        id: "final_key",
        name: "Velvet Master Key",
        x: 62,
        y: 52,
        width: 45,
        height: 45,
        type: "pickup",
        requiresObjective: "disarm_trap",
        givesItem: "velvet_key",
        noise: 4,
        visual: "golden_key",
        sound: "pickup",
        tooltip: "Take the velvet key",
        completesObjective: "get_final_key"
      },
      {
        id: "grand_double_doors",
        name: "Grand Oak Exit Doors",
        x: 50,
        y: 18,
        width: 75,
        height: 95,
        type: "target",
        requiredItem: "velvet_key",
        noise: 10,
        visual: "grand_exit",
        sound: "place",
        tooltip: "Unlock doors and escape to victory!",
        completesObjective: "escape_door"
      },
      {
        id: "brass_candelabra",
        name: "Antique Candelabra",
        x: 85,
        y: 68,
        width: 50,
        height: 65,
        type: "danger",
        visual: "candelabra",
        noise: 55,
        sound: "loud",
        tooltip: "CLATTER! Heavy metal bells!"
      }
    ]
  }
];
