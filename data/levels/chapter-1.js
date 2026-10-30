// Chapter 1: Levels 01 to 10
// Bedroom, Study Room, Living Room, Kitchen

export const CHAPTER_1_LEVELS = [
  // ==========================================
  // LEVEL 01 – Quiet Morning
  // ==========================================
  {
    id: 1,
    chapter: 1,
    title: "Quiet Morning",
    environment: "bedroom",
    difficulty: "Very Easy",
    description: "Pick up the fallen book and place it gently on the nightstand.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Shhh... Mr. Snoozy is sleeping like a baby!",
    hints: [
      "Tap the blue book on the floor to pick it up.",
      "Now tap the wooden nightstand to place it down gently."
    ],
    objectives: [
      { id: "pickup_book", text: "Pick up the book", completed: false },
      { id: "place_book", text: "Place the book on the table", completed: false }
    ],
    objects: [
      {
        id: "book",
        name: "Story Book",
        x: 28,
        y: 68,
        width: 70,
        height: 60,
        type: "pickup",
        givesItem: "book",
        noise: 0,
        visual: "book",
        sound: "pickup",
        tooltip: "Tap to pick up book",
        completesObjective: "pickup_book"
      },
      {
        id: "nightstand",
        name: "Nightstand Table",
        x: 74,
        y: 56,
        width: 90,
        height: 80,
        type: "target",
        requiredItem: "book",
        noise: 8,
        visual: "nightstand",
        sound: "place",
        tooltip: "Place book here",
        completesObjective: "place_book"
      },
      {
        id: "creaky_floor_decoy",
        name: "Loose Floorboard",
        x: 52,
        y: 80,
        width: 80,
        height: 40,
        type: "danger",
        noise: 28,
        visual: "creaky_wood",
        sound: "loud",
        tooltip: "Careful! Looks creaky"
      }
    ]
  },

  // ==========================================
  // LEVEL 02 – The Alarm
  // ==========================================
  {
    id: 2,
    chapter: 1,
    title: "The Alarm",
    environment: "bedroom",
    difficulty: "Easy",
    description: "Turn off the ticking alarm clock before it rings. Watch out for the water glass!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Crisis averted! The alarm is silent and Mr. Snoozy sleeps on.",
    hints: [
      "Tap the red alarm clock on the shelf to switch it off.",
      "Do NOT touch the fragile water glass right next to it!"
    ],
    objectives: [
      { id: "turn_off_alarm", text: "Turn off the alarm clock", completed: false },
      { id: "avoid_glass", text: "Avoid knocking over the water glass", completed: true }
    ],
    objects: [
      {
        id: "alarm_clock",
        name: "Alarm Clock",
        x: 78,
        y: 42,
        width: 65,
        height: 65,
        type: "toggle",
        visual: "alarm_ringing",
        noise: 12,
        sound: "click",
        tooltip: "Tap to switch off alarm!",
        completesObjective: "turn_off_alarm"
      },
      {
        id: "water_glass",
        name: "Fragile Glass of Water",
        x: 62,
        y: 45,
        width: 45,
        height: 60,
        type: "danger",
        visual: "water_glass",
        noise: 50,
        sound: "loud",
        tooltip: "Warning: dangerously close!"
      },
      {
        id: "fluffy_pillow",
        name: "Extra Pillow",
        x: 25,
        y: 65,
        width: 80,
        height: 50,
        type: "safe",
        visual: "pillow",
        noise: 0,
        sound: "pickup",
        tooltip: "Soft and silent"
      }
    ]
  },

  // ==========================================
  // LEVEL 03 – The Window
  // ==========================================
  {
    id: 3,
    chapter: 1,
    title: "The Window",
    environment: "bedroom",
    difficulty: "Easy",
    description: "A draft is coming in. Move the curtain and latch the open window shut carefully.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "The window is shut tight. Room is warm and quiet!",
    hints: [
      "First gently slide the curtain aside.",
      "Then tap the window pane to close it.",
      "Avoid shaking the noisy wind chimes!"
    ],
    objectives: [
      { id: "move_curtain", text: "Move the curtain carefully", completed: false },
      { id: "close_window", text: "Close the window pane", completed: false },
      { id: "latch_window", text: "Secure the window latch", completed: false }
    ],
    objects: [
      {
        id: "curtain",
        name: "Cozy Curtain",
        x: 18,
        y: 28,
        width: 60,
        height: 120,
        type: "toggle",
        visual: "curtain_open",
        noise: 6,
        sound: "pickup",
        tooltip: "Tap to draw curtain",
        completesObjective: "move_curtain"
      },
      {
        id: "window_pane",
        name: "Open Window",
        x: 36,
        y: 24,
        width: 80,
        height: 90,
        type: "toggle",
        visual: "window_open",
        noise: 14,
        sound: "place",
        requiresObjective: "move_curtain",
        tooltip: "Tap to push window closed",
        completesObjective: "close_window"
      },
      {
        id: "window_latch",
        name: "Window Latch",
        x: 48,
        y: 50,
        width: 40,
        height: 35,
        type: "toggle",
        visual: "latch_open",
        noise: 10,
        sound: "click",
        requiresObjective: "close_window",
        tooltip: "Lock the latch silently",
        completesObjective: "latch_window"
      },
      {
        id: "wind_chime",
        name: "Jingly Wind Chimes",
        x: 60,
        y: 18,
        width: 45,
        height: 65,
        type: "danger",
        visual: "wind_chime",
        noise: 42,
        sound: "loud",
        tooltip: "Very loud bells!"
      }
    ]
  },

  // ==========================================
  // LEVEL 04 – Hungry Cat
  // ==========================================
  {
    id: 4,
    chapter: 1,
    title: "Hungry Cat",
    environment: "bedroom",
    difficulty: "Easy",
    description: "The cat is purring and about to meow loudly for breakfast. Feed it before it wakes Mr. Snoozy!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Purrr... the kitty is happily munching its food!",
    hints: [
      "Pick up the cat food can from the low shelf.",
      "Tap the empty cat bowl to fill it.",
      "Whatever you do, don't step on that squeaky rubber mouse!"
    ],
    objectives: [
      { id: "get_food", text: "Pick up the cat food", completed: false },
      { id: "feed_cat", text: "Fill the cat's bowl", completed: false }
    ],
    objects: [
      {
        id: "cat_food_can",
        name: "Cat Food Tin",
        x: 82,
        y: 58,
        width: 50,
        height: 50,
        type: "pickup",
        givesItem: "cat_food",
        noise: 5,
        visual: "cat_food",
        sound: "pickup",
        tooltip: "Grab the yummy cat food",
        completesObjective: "get_food"
      },
      {
        id: "cat_bowl",
        name: "Cat Bowl",
        x: 28,
        y: 74,
        width: 60,
        height: 45,
        type: "target",
        requiredItem: "cat_food",
        noise: 8,
        visual: "cat_bowl_empty",
        sound: "place",
        tooltip: "Tap with food to fill bowl",
        completesObjective: "feed_cat"
      },
      {
        id: "hungry_cat",
        name: "Mochi the Cat",
        x: 18,
        y: 68,
        width: 65,
        height: 60,
        type: "safe",
        visual: "cat_hungry",
        noise: 10,
        sound: "small",
        tooltip: "Patiently waiting for food"
      },
      {
        id: "squeaky_mouse_toy",
        name: "Squeaky Mouse Toy",
        x: 55,
        y: 75,
        width: 45,
        height: 35,
        type: "danger",
        visual: "squeaky_mouse",
        noise: 44,
        sound: "loud",
        tooltip: "Don't step here! SQUEAKS!"
      }
    ]
  },

  // ==========================================
  // LEVEL 05 – Falling Book
  // ==========================================
  {
    id: 5,
    chapter: 1,
    title: "Falling Book",
    environment: "study",
    difficulty: "Medium",
    description: "A heavy encyclopedia is tilting off the bookshelf. Catch it before it crashes!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Super reflexes! Caught with lightning stealth.",
    hints: [
      "Quickly tap the wobbling book on the top shelf to catch it!",
      "Once caught, tap the empty shelf slot below to tuck it away safely."
    ],
    objectives: [
      { id: "catch_book", text: "Catch the falling book in time", completed: false },
      { id: "shelve_book", text: "Slide book into shelf slot", completed: false }
    ],
    objects: [
      {
        id: "falling_book",
        name: "Wobbling Book",
        x: 68,
        y: 30,
        width: 55,
        height: 65,
        type: "timed_catch",
        givesItem: "heavy_book",
        noise: 10,
        visual: "book_wobbling",
        sound: "pickup",
        tooltip: "Tap quickly before it falls!",
        completesObjective: "catch_book"
      },
      {
        id: "bookshelf_slot",
        name: "Empty Book Slot",
        x: 45,
        y: 48,
        width: 70,
        height: 60,
        type: "target",
        requiredItem: "heavy_book",
        noise: 8,
        visual: "shelf_slot",
        sound: "place",
        tooltip: "Slide book safely into shelf",
        completesObjective: "shelve_book"
      },
      {
        id: "brass_globe",
        name: "Spinning Brass Globe",
        x: 20,
        y: 48,
        width: 55,
        height: 65,
        type: "danger",
        noise: 35,
        visual: "globe",
        sound: "loud",
        tooltip: "Heavy and rattles loudly!"
      }
    ]
  },

  // ==========================================
  // LEVEL 06 – The Door
  // ==========================================
  {
    id: 6,
    chapter: 1,
    title: "The Door",
    environment: "doorway",
    difficulty: "Medium",
    description: "Sneak out to the hallway. Find the golden key, unlock the brass lock, and open the door a crack.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Click! The door unlocked softly and you slipped through unnoticed.",
    hints: [
      "Take the brass key hanging on the coat hook.",
      "Use the key on the door lock.",
      "Turn the handle gently to crack open the door."
    ],
    objectives: [
      { id: "get_key", text: "Pick up the door key", completed: false },
      { id: "unlock_door", text: "Unlock the door", completed: false },
      { id: "open_door", text: "Open the door slowly", completed: false }
    ],
    objects: [
      {
        id: "coat_hook_key",
        name: "Golden Key",
        x: 22,
        y: 40,
        width: 45,
        height: 55,
        type: "pickup",
        givesItem: "brass_key",
        noise: 5,
        visual: "golden_key",
        sound: "pickup",
        tooltip: "Take the room key",
        completesObjective: "get_key"
      },
      {
        id: "door_lock",
        name: "Door Keyhole",
        x: 68,
        y: 50,
        width: 50,
        height: 50,
        type: "target",
        requiredItem: "brass_key",
        noise: 10,
        visual: "keyhole",
        sound: "click",
        tooltip: "Insert key into lock",
        completesObjective: "unlock_door"
      },
      {
        id: "door_handle",
        name: "Brass Door Handle",
        x: 68,
        y: 60,
        width: 55,
        height: 45,
        type: "toggle",
        requiresObjective: "unlock_door",
        noise: 12,
        visual: "door_handle",
        sound: "place",
        tooltip: "Turn handle softly",
        completesObjective: "open_door"
      },
      {
        id: "umbrella_stand",
        name: "Metal Umbrella Stand",
        x: 84,
        y: 70,
        width: 45,
        height: 65,
        type: "danger",
        visual: "umbrella_stand",
        noise: 46,
        sound: "loud",
        tooltip: "Clangs like a cymbal if touched!"
      }
    ]
  },

  // ==========================================
  // LEVEL 07 – The Phone
  // ==========================================
  {
    id: 7,
    chapter: 1,
    title: "The Phone",
    environment: "bedroom",
    difficulty: "Medium",
    description: "BZZT! BZZT! A smartphone is buzzing continuously under a jacket. Silence it!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Silent mode activated. Sweet quiet dreams returned.",
    hints: [
      "Move the warm fleece jacket on the armchair to reveal the phone.",
      "Tap the vibrating phone screen to silence calls.",
      "Dismiss the blinking popup notification."
    ],
    objectives: [
      { id: "find_phone", text: "Move jacket to find phone", completed: false },
      { id: "mute_vibrate", text: "Turn off vibration", completed: false },
      { id: "silence_notif", text: "Silence notification banner", completed: false }
    ],
    objects: [
      {
        id: "jacket",
        name: "Fleece Jacket",
        x: 35,
        y: 55,
        width: 85,
        height: 75,
        type: "toggle",
        noise: 8,
        visual: "jacket",
        sound: "pickup",
        tooltip: "Lift jacket aside",
        completesObjective: "find_phone"
      },
      {
        id: "phone",
        name: "Buzzing Smartphone",
        x: 42,
        y: 62,
        width: 50,
        height: 65,
        type: "toggle",
        requiresObjective: "find_phone",
        noise: 12,
        visual: "phone_buzzing",
        sound: "click",
        tooltip: "Tap to switch to silent",
        completesObjective: "mute_vibrate"
      },
      {
        id: "phone_banner",
        name: "Notification Dismiss",
        x: 44,
        y: 48,
        width: 60,
        height: 35,
        type: "toggle",
        requiresObjective: "mute_vibrate",
        noise: 5,
        visual: "dismiss_button",
        sound: "click",
        tooltip: "Tap to dismiss",
        completesObjective: "silence_notif"
      },
      {
        id: "creaky_lamp",
        name: "Table Lamp Switch",
        x: 82,
        y: 46,
        width: 50,
        height: 70,
        type: "danger",
        visual: "lamp",
        noise: 38,
        sound: "loud",
        tooltip: "Clicky spring switch!"
      }
    ]
  },

  // ==========================================
  // LEVEL 08 – The Hungry Dog
  // ==========================================
  {
    id: 8,
    chapter: 1,
    title: "The Hungry Dog",
    environment: "living_room",
    difficulty: "Medium",
    description: "Barnaby the pup is whining near Mr. Snoozy's bed. Lure him away with a bone treat!",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Good boy Barnaby! Chewing happily on his dog bed.",
    hints: [
      "Pick up the juicy dog bone from the coffee table.",
      "Tap the dog bed in the corner to place the treat there.",
      "Don't touch the dog before giving him the bone or he will bark!"
    ],
    objectives: [
      { id: "get_bone", text: "Pick up the dog bone treat", completed: false },
      { id: "place_bone_bed", text: "Lure dog to bed with bone", completed: false }
    ],
    objects: [
      {
        id: "dog_bone",
        name: "Tasty Bone",
        x: 52,
        y: 65,
        width: 55,
        height: 40,
        type: "pickup",
        givesItem: "dog_bone",
        noise: 5,
        visual: "dog_bone",
        sound: "pickup",
        tooltip: "Take the dog bone",
        completesObjective: "get_bone"
      },
      {
        id: "dog_bed",
        name: "Fluffy Dog Bed",
        x: 18,
        y: 72,
        width: 85,
        height: 60,
        type: "target",
        requiredItem: "dog_bone",
        noise: 8,
        visual: "dog_bed",
        sound: "place",
        tooltip: "Place bone here to lure pup",
        completesObjective: "place_bone_bed"
      },
      {
        id: "dog",
        name: "Barnaby the Puppy",
        x: 75,
        y: 65,
        width: 70,
        height: 65,
        type: "danger",
        noise: 48,
        visual: "dog_whining",
        sound: "loud",
        tooltip: "Careful! Might bark loudly if startled!"
      }
    ]
  },

  // ==========================================
  // LEVEL 09 – Midnight Snack
  // ==========================================
  {
    id: 9,
    chapter: 1,
    title: "Midnight Snack",
    environment: "kitchen",
    difficulty: "Medium",
    description: "Quietly open the refrigerator, grab a delicious cookie, and seal the fridge door shut.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Crunch-free stealth! Midnight cookie acquired safely.",
    hints: [
      "Gently pry open the refrigerator door.",
      "Take the chocolate chip cookie from inside.",
      "Close the fridge door softly.",
      "Avoid the electric blender on the kitchen counter!"
    ],
    objectives: [
      { id: "open_fridge", text: "Open refrigerator carefully", completed: false },
      { id: "get_cookie", text: "Collect a biscuit", completed: false },
      { id: "close_fridge", text: "Close refrigerator door", completed: false }
    ],
    objects: [
      {
        id: "fridge_handle",
        name: "Fridge Door",
        x: 28,
        y: 35,
        width: 80,
        height: 120,
        type: "toggle",
        visual: "fridge_closed",
        noise: 14,
        sound: "click",
        tooltip: "Gently open fridge",
        completesObjective: "open_fridge"
      },
      {
        id: "cookie_jar",
        name: "Cookie Jar",
        x: 32,
        y: 52,
        width: 45,
        height: 45,
        type: "pickup",
        requiresObjective: "open_fridge",
        givesItem: "cookie",
        noise: 8,
        visual: "cookie",
        sound: "pickup",
        tooltip: "Grab a cookie",
        completesObjective: "get_cookie"
      },
      {
        id: "close_fridge_btn",
        name: "Close Refrigerator",
        x: 30,
        y: 35,
        width: 75,
        height: 110,
        type: "toggle",
        requiresObjective: "get_cookie",
        noise: 10,
        visual: "fridge_closing",
        sound: "place",
        tooltip: "Push shut softly",
        completesObjective: "close_fridge"
      },
      {
        id: "blender",
        name: "Countertop Blender",
        x: 75,
        y: 52,
        width: 50,
        height: 65,
        type: "danger",
        visual: "blender",
        noise: 58,
        sound: "loud",
        tooltip: "Do not touch! Roars like an airplane!"
      }
    ]
  },

  // ==========================================
  // LEVEL 10 – Slipper Mission
  // ==========================================
  {
    id: 10,
    chapter: 1,
    title: "Slipper Mission",
    environment: "living_room",
    difficulty: "Medium",
    description: "Find both scattered fluffy slippers and align them neatly beside the exit mat.",
    noiseLimit: 100,
    noiseDecayRate: 2,
    successMessage: "Slippers lined up like a pro! Total silence preserved.",
    hints: [
      "Find the left slipper resting under the sofa.",
      "Find the right slipper peeking behind the curtain.",
      "Place them together onto the front door mat."
    ],
    objectives: [
      { id: "get_slipper_1", text: "Find left slipper", completed: false },
      { id: "get_slipper_2", text: "Find right slipper", completed: false },
      { id: "place_slippers", text: "Place slippers near door", completed: false }
    ],
    objects: [
      {
        id: "slipper_left",
        name: "Left Slipper",
        x: 22,
        y: 72,
        width: 50,
        height: 35,
        type: "pickup",
        givesItem: "slipper_1",
        noise: 6,
        visual: "slipper_blue",
        sound: "pickup",
        tooltip: "Pick up left slipper",
        completesObjective: "get_slipper_1"
      },
      {
        id: "slipper_right",
        name: "Right Slipper",
        x: 82,
        y: 58,
        width: 50,
        height: 35,
        type: "pickup",
        requiresObjective: "get_slipper_1",
        givesItem: "slippers",
        noise: 6,
        visual: "slipper_blue",
        sound: "pickup",
        tooltip: "Pick up right slipper",
        completesObjective: "get_slipper_2"
      },
      {
        id: "door_mat",
        name: "Welcome Door Mat",
        x: 52,
        y: 76,
        width: 85,
        height: 45,
        type: "target",
        requiredItem: "slippers",
        noise: 8,
        visual: "door_mat",
        sound: "place",
        tooltip: "Place both slippers here",
        completesObjective: "place_slippers"
      },
      {
        id: "rocking_chair",
        name: "Old Rocking Chair",
        x: 48,
        y: 42,
        width: 65,
        height: 80,
        type: "danger",
        visual: "rocking_chair",
        noise: 36,
        sound: "loud",
        tooltip: "Creaks loudly back and forth!"
      }
    ]
  }
];
