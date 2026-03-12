export type StyleMode =
  | "all"
  | "classic"
  | "modern"
  | "witty"
  | "minimal"
  | "filipino"
  | "romantic";

export const STYLE_OPTIONS: {
  value: StyleMode;
  label: string;
  hint: string;
}[] = [
  { value: "all", label: "All Styles", hint: "Balanced mix" },
  { value: "classic", label: "Classic", hint: "Traditional" },
  { value: "modern", label: "Modern", hint: "Clean & trendy" },
  { value: "witty", label: "Witty", hint: "Playful puns" },
  { value: "minimal", label: "Minimal", hint: "Short & neat" },
  { value: "filipino", label: "Filipino", hint: "Local flavor" },
  { value: "romantic", label: "Romantic", hint: "Sweet & poetic" },
];

// Witty words used for embeds / pun-style generation
export const WITTY_PATTERNS = [
  { word: "forever" },
  { word: "finally" },
  { word: "together" },
  { word: "perfectly" },
  { word: "always" },
  { word: "beloved" },
  { word: "enchanted" },
  { word: "happilyever" },
  { word: "officially" },
  { word: "foundher" },
  { word: "foundhis" },
  { word: "saidyes" },
  { word: "meanttobe" },
  { word: "writteninthestars" },
  { word: "bettertogether" },
  { word: "hitched" },
  { word: "theone" },
  { word: "destined" },
  { word: "endgame" },
  { word: "soulmate" },
  { word: "taken" },
  { word: "cherished" },
  { word: "magical" },
  { word: "romanced" },
  { word: "adored" },
  { word: "blessed" },
  { word: "evermore" },
  { word: "serendipity" },
  { word: "unbreakable" },
  { word: "crazyinlove" },
  { word: "lovestory" },
  { word: "allalong" },
  { word: "betterhalf" },
  { word: "gameover" },
  { word: "lockedin" },
];

// Filipino-style bases and phrases
export const FILIPINO_BASES = [
  "Habambuhay",
  "SaWakas",
  "YesNa",
  "Nahanap",
  "Kasalan",
  "Tadhana",
  "SaksiAngLangit",
  "PanaloKay",
  "IkawAtAko",
  "Sinta",
  "SimulaNgayon",
  "Kislap",
  "TunayNaPagibig",
  "DitoSaPuso",
  "Sumpaan",
  "Pagibig",
  "Magpakailanman",
  "Tinatangi",
  "MahalKita",
  "WalangHanggan",
  "Panghabambuhay",
  "AalagaanKita",
  "IkawNaNga",
  "ButiNaLang",
  "AtingPanahon",
  "IkawLangSapat",
  "TibokNgPuso",
  "SagotNa",
  "Pinagtagpo",
  "ParaSaIsatIsa",
  "MinsanLang",
  "WagasNaPagibig",
  "KayoNaTalaga",
  "BuoNaTayo",
  "SaIsatIsa",
];

// Modern-style bridge words for clean trendy combinations
export const MODERN_BRIDGES = [
  "The",
  "Team",
  "Squad",
  "Est",
  "Meet",
  "Hello",
  "Goes",
  "And",
  "Plus",
  "With",
  "X",
  "Era",
  "Edit",
  "Collective",
  "Studio",
  "Story",
  "Mode",
  "Official",
  "Archive",
  "Project",
  "Co",
  "Club",
  "House",
  "Social",
  "Daily",
  "Life",
  "Ever",
  "Now",
  "Union",
  "Verse",
  "Wave",
  "Line",
  "State",
  "World",
  "Chapter",
];

export const ROMANTIC_WORDS = [
  "Soulmate", "Heart", "Promise", "Dream", "EverAfter", "Union", "Journey",
  "Love", "Devoted", "Cherish", "Beloved", "Moon", "Star", "Destiny",
  "Forever", "Tender", "Grace", "Bloom", "Bliss", "Vow", "Heaven",
  "Embrace", "Darling", "Adore", "Serenade", "Harmony", "Whisper",
  "Treasure", "Amour", "Sweetheart", "Dearest", "Faithful", "Passion",
  "Roses", "Heartbeat"
];

export const CLASSIC_WORDS = [
  "Wedding", "Weds", "Forever", "LoveStory", "IDo", "Together", "Official",
  "Union", "TiedTheKnot", "EverAfter", "AtLast", "MrAndMrs", "Newlyweds",
  "HappilyEverAfter", "FromThisDay", "WeddingDay", "JustMarried",
  "TheBeginning", "LoveWins", "AlwaysAndForever", "MeantForEachOther",
  "ToHaveAndToHold", "TwoBecomeOne", "SealedWithLove", "BeginningForever"
];

// Minimal short-form endings
export const MINIMAL_ENDINGS = [
  "2026",
  "Forever",
  "Wed",
  "Weds",
  "IDo",
  "XO",
  "Love",
  "Us",
  "Now",
  "Vows",
  "Day",
  "Yes",
  "Ever",
  "Only",
  "Always",
  "Begin",
  "Knot",
  "Union",
  "Official",
  "After",
];

// Optional output targets per genre
export const GENRE_TARGET_COUNT: Record<Exclude<StyleMode, "all">, number> = {
  classic: 24,
  modern: 24,
  witty: 28,
  minimal: 22,
  filipino: 26,
  romantic: 24,
};