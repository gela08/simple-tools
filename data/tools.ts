import { 
  // Text Icons
  Hash, 
  Type, 
  Clock, 
  ArrowLeftRight, 
  Eraser, 
  Baseline, 
  Link, 
  FileText,
  // Formatter Icons
  CaseSensitive, 
  Space, 
  ListOrdered,
  // Sorter Icons
  SortAsc, 
  Binary, 
  Shuffle,
  // Generator Icons
  User, Lock, Heart, Target,
  // Fun Icons
  Dice5, 
  Coins, 
  HelpCircle, 
  Disc, 
  Lightbulb,
  // Utility Icons
  Calendar, 
  Cake, 
  Percent, 
  Ruler, 
  ShieldCheck, 
  Cpu, 
  Repeat,
  // Types
  LucideIcon 
} from 'lucide-react';

export type ToolCategory =
  | "text"
  | "generator"
  | "formatter"
  | "sorter"
  | "utility"
  | "fun";

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  icon: LucideIcon; // Functional component instead of string
  color: string;    // Base color name for dynamic styling
  tags?: string[];
}

export const categoryLabels: Record<ToolCategory, string> = {
  text: "Text Tools",
  formatter: "Formatters",
  generator: "Generators",
  sorter: "Sorting Tools",
  utility: "Utility Tools",
  fun: "Fun & Random",
};

export const tools: Tool[] = [
  // --- TEXT TOOLS ---
  {
    id: "word-counter",
    name: "Word Counter",
    slug: "/tools/word-counter",
    description: "Count words, sentences, paragraphs, and more in real time.",
    longDescription: "Paste any text and instantly see the word count, character count, sentence count, and paragraph count.",
    category: "text",
    icon: Hash,
    color: "blue",
    tags: ["words", "count", "essay", "writing"],
  },
  {
    id: "character-counter",
    name: "Character Counter",
    slug: "/tools/character-counter",
    description: "Count characters with and without spaces instantly.",
    longDescription: "Track exact character counts in real time. Ideal for social media posts and meta descriptions.",
    category: "text",
    icon: Type,
    color: "purple",
    tags: ["characters", "twitter", "sms", "limit"],
  },
  {
    id: "reading-time",
    name: "Reading Time Calculator",
    slug: "/tools/reading-time",
    description: "Estimate how long it takes to read any text.",
    longDescription: "Paste your article or content and get an estimated reading time based on average adult reading speed.",
    category: "text",
    icon: Clock,
    color: "amber",
    tags: ["read", "time", "article", "blog"],
  },
  {
    id: "text-reverser",
    name: "Text Reverser",
    slug: "/tools/text-reverser",
    description: "Reverse any text, word by word or character by character.",
    longDescription: "Instantly reverse text — flip each character or reverse word order. Great for puzzles.",
    category: "text",
    icon: ArrowLeftRight,
    color: "cyan",
    tags: ["reverse", "flip", "mirror", "text"],
  },
  {
    id: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    slug: "/tools/remove-duplicate-lines",
    description: "Remove repeated lines from any list or text instantly.",
    longDescription: "Paste a list with duplicates and get a clean deduplicated version. Perfect for data cleaning.",
    category: "text",
    icon: Eraser,
    color: "teal",
    tags: ["duplicate", "dedupe", "clean", "list", "unique"],
  },
  {
    id: "capitalize-sentences",
    name: "Capitalize Sentences",
    slug: "/tools/capitalize-sentences",
    description: "Auto-capitalize the first letter of every sentence.",
    longDescription: "Fix uncapitalized sentences instantly. Great for fixing pasted content and notes.",
    category: "text",
    icon: Baseline,
    color: "lime",
    tags: ["capitalize", "sentence", "grammar", "fix"],
  },
  {
    id: "slug-generator",
    name: "Slug Generator",
    slug: "/tools/slug-generator",
    description: "Convert any text into a clean, URL-friendly slug.",
    longDescription: "Turn any title or phrase into a clean URL slug. Removes special characters for SEO.",
    category: "text",
    icon: Link,
    color: "violet",
    tags: ["slug", "url", "seo", "permalink", "developer"],
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    slug: "/tools/lorem-ipsum",
    description: "Generate placeholder text for designs and mockups.",
    longDescription: "Generate classic Lorem Ipsum placeholder text by paragraph count. Great for UI prototyping.",
    category: "text",
    icon: FileText,
    color: "slate",
    tags: ["lorem", "ipsum", "placeholder", "dummy", "design"],
  },

  // --- FORMATTERS & SORTERS ---
  {
    id: "text-case-converter",
    name: "Text Case Converter",
    slug: "/tools/text-case-converter",
    description: "Convert text to UPPERCASE, lowercase, Title Case, and more.",
    longDescription: "Instantly transform text between uppercase, lowercase, title case, and camelCase.",
    category: "formatter",
    icon: CaseSensitive,
    color: "green",
    tags: ["case", "uppercase", "lowercase", "title", "camel"],
  },
  {
    id: "remove-spaces",
    name: "Remove Extra Spaces",
    slug: "/tools/remove-spaces",
    description: "Clean up messy text by removing extra whitespace.",
    longDescription: "Remove duplicate spaces, trailing, and leading spaces from any text instantly.",
    category: "formatter",
    icon: Space,
    color: "pink",
    tags: ["spaces", "whitespace", "clean", "trim"],
  },
  {
    id: "line-sorter",
    name: "Line Sorter",
    slug: "/tools/line-sorter",
    description: "Sort lines of text alphabetically or in reverse.",
    longDescription: "Paste a list of items and sort them alphabetically, reverse, or by length.",
    category: "formatter",
    icon: ListOrdered,
    color: "indigo",
    tags: ["sort", "lines", "alphabetical", "list"],
  },
  {
    id: "alphabetical-sort",
    name: "Alphabetical Sort",
    slug: "/tools/alphabetical-sort",
    description: "Sort any list of words or items from A to Z.",
    longDescription: "Paste a list, one item per line, and sort it alphabetically (ascending or descending).",
    category: "sorter",
    icon: SortAsc,
    color: "orange",
    tags: ["alphabetical", "sort", "a-z", "list", "order"],
  },
  {
    id: "number-sort",
    name: "Number Sort",
    slug: "/tools/number-sort",
    description: "Sort a list of numbers from lowest to highest.",
    longDescription: "Paste a list of numbers and sort them numerically in ascending or descending order.",
    category: "sorter",
    icon: Binary,
    color: "yellow",
    tags: ["number", "sort", "numeric", "order", "list"],
  },
  {
    id: "list-randomizer",
    name: "List Randomizer",
    slug: "/tools/list-randomizer",
    description: "Shuffle any list into a random order instantly.",
    longDescription: "Paste a list of items or names and shuffle them into a completely random order.",
    category: "sorter",
    icon: Shuffle,
    color: "fuchsia",
    tags: ["shuffle", "random", "list", "order", "randomize"],
  },

  // --- GENERATORS ---
  {
    id: "username-generator",
    name: "Username Generator",
    slug: "/tools/username-generator",
    description: "Generate creative, custom usernames for any platform.",
    longDescription: "Generate unique usernames using names or keywords in various styles (gaming, aesthetic).",
    category: "generator",
    icon: User,
    color: "orange",
    tags: ["username", "handle", "social media", "gaming", "nickname"],
  },
  {
    id: "password-generator",
    name: "Password Generator",
    slug: "/tools/password-generator",
    description: "Generate strong, secure, random passwords instantly.",
    longDescription: "Create strong passwords with customizable length and character sets. Runs locally.",
    category: "generator",
    icon: Lock,
    color: "red",
    tags: ["password", "secure", "random", "strong", "security"],
  },
  {
    id: "wedding-hashtag",
    name: "Wedding Hashtag Generator",
    slug: "/tools/wedding-hashtag",
    description: "Generate cute, creative wedding hashtags for couples.",
    longDescription: "Enter the bride and groom's names and get punny wedding hashtags for Instagram.",
    category: "generator",
    icon: Heart,
    color: "rose",
    tags: ["wedding", "hashtag", "couple", "bride", "groom", "instagram"],
  },
  {
    id: "random-name-picker",
    name: "Random Name Picker",
    slug: "/tools/random-name-picker",
    description: "Pick a random name or winner from any list.",
    longDescription: "Great for giveaways, classroom activities, and team assignments.",
    category: "generator",
    icon: Target,
    color: "emerald",
    tags: ["random", "name", "picker", "winner", "giveaway"],
  },

  // --- FUN & GAMES ---
  {
    id: "random-number",
    name: "Random Number Generator",
    slug: "/tools/random-number",
    description: "Generate random numbers in any custom range.",
    longDescription: "Set a min/max, choose count, and get truly random results instantly.",
    category: "fun",
    icon: Binary,
    color: "sky",
    tags: ["random", "number", "generate", "range", "raffle"],
  },
  {
    id: "dice-roller",
    name: "Dice Roller",
    slug: "/tools/dice-roller",
    description: "Roll any number of dice with any number of sides.",
    longDescription: "Roll classic d6 dice or customize with d4, d8, d10, d12, d20, and d100.",
    category: "fun",
    icon: Dice5,
    color: "purple",
    tags: ["dice", "roll", "d6", "d20", "dnd", "game", "random"],
  },
  {
    id: "coin-flip",
    name: "Coin Flip",
    slug: "/tools/coin-flip",
    description: "Flip a virtual coin. Heads or tails, decided instantly.",
    longDescription: "Simple, fair, and instant. Keeps track of your flip history.",
    category: "fun",
    icon: Coins,
    color: "yellow",
    tags: ["coin", "flip", "heads", "tails", "random", "decide"],
  },
  {
    id: "yes-no-picker",
    name: "Yes / No Generator",
    slug: "/tools/yes-no-picker",
    description: "Get a random Yes or No answer when you can't decide.",
    longDescription: "Stuck on a decision? Get a clear yes or no answer at random.",
    category: "fun",
    icon: HelpCircle,
    color: "indigo",
    tags: ["yes", "no", "random", "decide", "magic 8 ball"],
  },
  {
    id: "spin-the-wheel",
    name: "Spin the Wheel",
    slug: "/tools/spin-the-wheel",
    description: "Add custom options and spin to pick one at random.",
    longDescription: "Build a custom spinning wheel. Perfect for games and classroom picks.",
    category: "fun",
    icon: Disc,
    color: "orange",
    tags: ["wheel", "spin", "random", "pick", "game", "decision"],
  },
  {
    id: "idea-generator",
    name: "Idea Generator",
    slug: "/tools/idea-generator",
    description: "Get random creative writing prompts and project ideas.",
    longDescription: "Generate random writing prompts and conversation starters.",
    category: "fun",
    icon: Lightbulb,
    color: "amber",
    tags: ["idea", "prompt", "creative", "writing", "inspiration"],
  },

  // --- UTILITY ---
  {
    id: "countdown-calculator",
    name: "Days Until Calculator",
    slug: "/tools/countdown-calculator",
    description: "Calculate how many days until any date.",
    longDescription: "Enter any future date and see how many days, weeks, and months away it is.",
    category: "utility",
    icon: Calendar,
    color: "green",
    tags: ["countdown", "days", "date", "calculator", "event", "birthday"],
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    slug: "/tools/age-calculator",
    description: "Calculate your exact age in years, months, and days.",
    longDescription: "Enter your birth date and get your precise age down to the day.",
    category: "utility",
    icon: Cake,
    color: "pink",
    tags: ["age", "birthday", "calculate", "born", "years"],
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    slug: "/tools/percentage-calculator",
    description: "Calculate percentages, tips, discounts, and more.",
    longDescription: "Find X% of Y, what percent X is of Y, and percent change.",
    category: "utility",
    icon: Percent,
    color: "teal",
    tags: ["percent", "percentage", "tip", "discount", "calculate", "math"],
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    slug: "/tools/unit-converter",
    description: "Convert between length, weight, and temperature units.",
    longDescription: "Quick conversions: km/miles, kg/lbs, Celsius/Fahrenheit, and more.",
    category: "utility",
    icon: Ruler,
    color: "cyan",
    tags: ["convert", "unit", "km", "miles", "kg", "lbs", "celsius"],
  },
  {
    id: "password-strength",
    name: "Password Strength Checker",
    slug: "/tools/password-strength",
    description: "Check how strong your password really is.",
    longDescription: "Analyze password length, variety, and entropy in your browser.",
    category: "utility",
    icon: ShieldCheck,
    color: "blue",
    tags: ["password", "strength", "security", "check"],
  },
  {
    id: "text-to-binary",
    name: "Text to Binary",
    slug: "/tools/text-to-binary",
    description: "Convert text to binary code and binary back to text.",
    longDescription: "Convert strings to binary representation or decode back to text.",
    category: "utility",
    icon: Cpu,
    color: "slate",
    tags: ["binary", "text", "convert", "encode", "decode", "developer"],
  },
  {
    id: "repetition-timer",
    name: "Repetition Timer",
    slug: "/tools/repetition-timer",
    description: "Calculate how long repetitive tasks take with breaks.",
    longDescription: "Estimate duration for batch tasks based on count and interval.",
    category: "utility",
    icon: Repeat,
    color: "blue",
    tags: ["timer", "repetition", "productivity", "batch", "schedule"],
  },
];

// Helper Functions
export function getRelatedTools(toolId: string): Tool[] {
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) return [];
  return tools
    .filter((t) => t.id !== toolId && t.category === tool.category)
    .slice(0, 3);
}

export function searchTools(query: string): Tool[] {
  if (!query.trim()) return tools;
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      (t.tags ?? []).some((tag) => tag.toLowerCase().includes(q))
  );
}