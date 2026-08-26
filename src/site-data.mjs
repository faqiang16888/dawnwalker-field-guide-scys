export const sources = {
  official: { label: "Official game site", url: "https://dawnwalkergame.com/us/en/home" },
  bandai: { label: "Bandai Namco game page", url: "https://www.bandainamcoent.com/games/dawnwalker" },
  buy: { label: "Official editions page", url: "https://dawnwalkergame.com/us/en/buy" },
  store: { label: "Bandai Namco store", url: "https://store.bandainamcoent.com/games/?_bc_fsnf=1&brand=66" },
  gameplay: { label: "Official Gameplay Overview", url: "https://www.youtube.com/watch?v=1XOa0JYJv8g" },
  trailer: { label: "Official cinematic trailer & gameplay teaser", url: "https://www.youtube.com/watch?v=MWsyV7yQIBQ" },
  steamPc: { label: "Official Steam PC requirements update", url: "https://store.steampowered.com/news/app/3751260/view/667242716145390401?l=english" }
};

export const pages = [
  {
    slug: "release-date",
    nav: "Release",
    title: "The Blood of Dawnwalker Release Date & Platforms",
    description: "The official release date and confirmed platforms for The Blood of Dawnwalker, with source links and a dated fact check.",
    eyebrow: "Release guide",
    answer: "The Blood of Dawnwalker is scheduled to release on September 3, 2026 for PlayStation 5, Xbox Series X|S and PC.",
    status: "Officially confirmed",
    sourceKeys: ["official", "bandai"],
    sections: [
      ["Release date", "Both the game’s official site and Bandai Namco list September 3, 2026. This page will be checked again if the publisher announces a schedule change."],
      ["Confirmed platforms", "The announced platforms are PlayStation 5, Xbox Series X|S and PC. This guide does not imply support for older console generations."],
      ["What to verify near launch", "Store availability, preload timing and exact regional unlock times can change. Use the linked official pages for the latest purchase and timing details."]
    ]
  },
  {
    slug: "gameplay-open-world",
    nav: "Gameplay",
    title: "The Blood of Dawnwalker Gameplay & Open World Explained",
    description: "An official-source overview of The Blood of Dawnwalker’s open world, day-and-night forms, quests and player choices.",
    eyebrow: "Gameplay overview",
    answer: "It is a single-player open-world dark fantasy action RPG built around Coen’s human form by day, vampire form by night, and choices made under time pressure.",
    status: "Official overview",
    sourceKeys: ["official", "gameplay"],
    sections: [
      ["A world shaped by choices", "Official materials describe an open world with forests, plains, swamps, mountains and settlements. Choices affect relationships and the wider story."],
      ["Human by day, vampire by night", "Coen uses different strengths across the day-and-night cycle. The official Gameplay Overview is the clearest visual source for these systems."],
      ["Pre-release boundary", "This is a mechanics overview, not a hands-on review. Quest order, balance and final performance should be verified after release."]
    ]
  },
  {
    slug: "editions",
    nav: "Editions",
    title: "The Blood of Dawnwalker Editions Compared",
    description: "Compare the officially announced Standard, Eclipse, Collector’s and Day 1 editions of The Blood of Dawnwalker.",
    eyebrow: "Buyer’s reference",
    answer: "Official pages currently list Standard, Eclipse and Collector’s options, while the Bandai Namco store also lists physical Day 1 products by platform.",
    status: "Check store before purchase",
    sourceKeys: ["buy", "store"],
    sections: [
      ["Digital editions", "Use the official editions page to compare the base game, digital bonuses and platform availability. Names and availability can vary by region."],
      ["Physical editions", "The Bandai Namco store is the source of record for listed physical packages, prices and stock status in its region."],
      ["Why prices are not copied here", "Prices, tax and stock can change. This page links to the current official listings rather than preserving a stale number as a permanent fact."]
    ]
  },
  {
    slug: "pc-requirements",
    nav: "PC requirements",
    title: "The Blood of Dawnwalker PC System Requirements",
    description: "Official minimum and recommended PC requirements for The Blood of Dawnwalker, including CPU, GPU, RAM, VRAM and storage.",
    eyebrow: "PC setup",
    answer: "The official minimum lists 16 GB RAM, 6 GB VRAM and 60 GB SSD storage; the recommended tier lists 16 GB RAM and 8 GB VRAM.",
    status: "Official requirements",
    sourceKeys: ["bandai", "steamPc"],
    sections: [
      ["Minimum", "Windows 10 64-bit, Intel Core i5-11400F or AMD Ryzen 7 2700X, 16 GB RAM, GTX 1060 or RX 580, 6 GB VRAM, DirectX 12 and 60 GB SSD storage."],
      ["Recommended", "Intel Core i7-11700K or AMD Ryzen 7 5700X, 16 GB RAM, RTX 4060, RX 7600 XT or Intel Arc B580, 8 GB VRAM and 60 GB SSD storage."],
      ["Before you upgrade", "Treat these as the publisher’s current targets, not a performance guarantee for every configuration. Recheck the official update near launch."]
    ]
  },
  {
    slug: "map-size",
    nav: "Map size",
    title: "The Blood of Dawnwalker Map Size: What Is Confirmed?",
    description: "What official sources confirm about The Blood of Dawnwalker’s world and what remains unknown about exact map size.",
    eyebrow: "Answer status",
    answer: "The exact map area has not been published in the official sources checked on August 26, 2026.",
    status: "Exact size not announced",
    sourceKeys: ["official", "gameplay"],
    sections: [
      ["What is confirmed", "The official site shows varied environments including forests, plains, swamps, mountains and settlements in an open-world setting."],
      ["What is not confirmed", "There is no reliable official square-kilometre figure in the sources used for this page. Any precise number would currently be speculation."],
      ["Update plan", "After release, this page can add a measured route comparison or an official map figure while preserving the source and test method."]
    ]
  },
  {
    slug: "time-limit",
    nav: "Time limit",
    title: "The Blood of Dawnwalker Time Limit Explained",
    description: "An official-source explanation of how time advances in The Blood of Dawnwalker and which details are still unknown.",
    eyebrow: "Core mechanic",
    answer: "Official material says time advances when you commit to quests, rather than simply passing while you explore.",
    status: "Mechanic confirmed; exact budget pending",
    sourceKeys: ["official", "gameplay"],
    sections: [
      ["How time advances", "The official site frames Coen’s mission around limited time and says that taking on quests moves time forward."],
      ["Exploration and planning", "Because the system is tied to choices, the practical question is likely which quests consume time—not a real-time countdown while reading menus."],
      ["What remains unknown", "The final game’s exact day budget, quest costs and failure states are not asserted here. Those need release-build evidence."]
    ]
  },
  {
    slug: "multiplayer-coop",
    nav: "Multiplayer",
    title: "Is The Blood of Dawnwalker Multiplayer or Co-op?",
    description: "The official answer on whether The Blood of Dawnwalker is a multiplayer or co-op game.",
    eyebrow: "Direct answer",
    answer: "Official Bandai Namco material describes The Blood of Dawnwalker as a single-player action RPG. No co-op mode is promised in the sources checked.",
    status: "Single-player confirmed",
    sourceKeys: ["trailer", "bandai"],
    sections: [
      ["Official positioning", "The official cinematic trailer description calls the game a single-player open-world dark fantasy action RPG."],
      ["What that means for co-op", "A single-player label is not evidence of hidden co-op. This page therefore does not claim local, online or campaign co-op support."],
      ["Future updates", "If the publisher announces a new mode, this answer should change only after an official source is available."]
    ]
  },
  {
    slug: "combat-system",
    nav: "Combat",
    title: "The Blood of Dawnwalker Combat System Overview",
    description: "A source-backed overview of human combat, vampire powers and the day-night trade-offs in The Blood of Dawnwalker.",
    eyebrow: "Combat guide",
    answer: "Coen’s combat changes with his form: human tools include weapons and magic, while his vampire form adds supernatural movement and attacks.",
    status: "Official overview",
    sourceKeys: ["official", "gameplay"],
    sections: [
      ["Human combat", "Official footage shows sword-based combat and magic during Coen’s human phase. Final timing and balance remain release-build questions."],
      ["Vampire combat", "At night, supernatural abilities change movement and offense, including wall traversal, gravity-like control and claw attacks shown in official footage."],
      ["No invented build advice", "The game is not yet released, so this page does not publish best builds, damage values or boss counters without real play evidence."]
    ]
  },
  {
    slug: "character-creation",
    nav: "Character creation",
    title: "Does The Blood of Dawnwalker Have Character Creation?",
    description: "What is confirmed about protagonist Coen and the current evidence boundary around character creation and customization.",
    eyebrow: "Answer status",
    answer: "The official story centers on a fixed protagonist named Coen. A full character creator is not confirmed in the official sources checked.",
    status: "Character creator unconfirmed",
    sourceKeys: ["official", "bandai"],
    sections: [
      ["The confirmed protagonist", "Coen is a young man turned into a Dawnwalker who is trying to save his family. This identity is central to the official story description."],
      ["Creation versus customization", "A fixed protagonist does not by itself rule out cosmetic customization, but the sources used here do not prove a creator or detailed appearance system."],
      ["Why this page is intentionally short", "A direct unknown answer is more useful than fabricated sliders, classes or appearance options. The page will be expanded only with official or hands-on evidence."]
    ]
  },
  {
    slug: "characters",
    nav: "Characters",
    title: "The Blood of Dawnwalker Characters: Confirmed Guide",
    description: "A focused, source-backed introduction to Coen and the confirmed story setup of The Blood of Dawnwalker.",
    eyebrow: "Character guide",
    answer: "Coen is the confirmed protagonist: a young Dawnwalker caught between human and vampire states while trying to save his family.",
    status: "Confirmed character information",
    sourceKeys: ["official", "bandai"],
    sections: [
      ["Who is Coen?", "Official descriptions present Coen as the central playable protagonist whose condition gives him different strengths by day and night."],
      ["Family and motivation", "The rescue of Coen’s family is part of the official premise and gives the game’s time pressure its personal stakes."],
      ["Scope of this guide", "This pre-release version does not mass-produce biographies for unnamed or lightly shown figures. More profiles require reliable official or in-game evidence."]
    ]
  },
  {
    slug: "romance",
    nav: "Romance",
    title: "Does The Blood of Dawnwalker Have Romance Options?",
    description: "The current evidence status for romance options and relationships in The Blood of Dawnwalker.",
    eyebrow: "Answer status",
    answer: "A romance system is not confirmed by the official sources checked on August 26, 2026.",
    status: "Romance unconfirmed",
    sourceKeys: ["bandai"],
    sections: [
      ["What is confirmed", "Official material discusses choices, relationships and connections, but those broad terms do not prove selectable romance routes."],
      ["What is not confirmed", "This guide does not claim romance options, named partners, gender restrictions or approval mechanics without direct evidence."],
      ["Update plan", "After release, the page can be revised with in-game dialogue, quest conditions and outcomes, clearly separating observed routes from speculation."]
    ]
  },
  {
    slug: "vampire-powers",
    nav: "Vampire powers",
    title: "The Blood of Dawnwalker Vampire Powers Explained",
    description: "A source-backed overview of Coen’s confirmed vampire form, supernatural movement and combat abilities.",
    eyebrow: "Ability overview",
    answer: "At night Coen can use supernatural vampire abilities shown in official footage, changing both traversal and combat.",
    status: "Official overview; values pending",
    sourceKeys: ["official", "gameplay"],
    sections: [
      ["Night form", "Coen’s vampire side becomes central after dark, creating a deliberate contrast with his human tools during the day."],
      ["Shown abilities", "Official material shows supernatural traversal and attacks, including wall movement, gravity-like control and claws."],
      ["Pre-release boundary", "Exact skill trees, unlock costs, cooldowns and best combinations are not listed because they need final-game evidence."]
    ]
  }
];

export const guideGroups = [
  ["Start here", ["release-date", "gameplay-open-world", "editions", "pc-requirements"]],
  ["World & systems", ["map-size", "time-limit", "multiplayer-coop", "combat-system"]],
  ["Character questions", ["character-creation", "characters", "romance", "vampire-powers"]]
];
