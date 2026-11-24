RECIPES.push({
  id: "bread",
  emoji: "🍞",
  title: "Bread",
  short: "Czech bread in a loaf tin",
  restartLabel: "🍞 New bread",
  finishText: "🍞 Bread is ready. Enjoy! 🧈",
  totalTime: "about 3 h + cooling",
  finishWhenLeft: 2,   // show the finish + New bread button when this many steps are left

  flours: [
    { label: "Wholemeal spelt", set: { flour: { name: "wholemeal spelt flour" }, water: { amount: 350 } } },
    { label: "Malthouse",       set: { flour: { name: "malthouse bread flour" }, water: { amount: 325 } } },
  ],

  ingredients: [
    { id: "flour",   amount: 500,  unit: "g",      name: "flour" },
    { id: "water",   amount: 350,  unit: "ml",     name: "tepid water" },
    { id: "yeast",   amount: 1,    unit: "sachet", name: "dried yeast" },
    { id: "sugar",   amount: 1,    unit: "tsp",    name: "sugar" },
    { id: "salt",    amount: 1,    unit: "tsp",    name: "salt" },
    { id: "caraway", amount: 1,    unit: "tsp",    name: "caraway seeds" },
    { id: "vinegar", amount: 2,    unit: "tsp",    name: "vinegar" },
    { id: "oil",     amount: 1,    unit: "tbsp",   name: "olive oil" },
    { id: "tinoil",  amount: null, unit: "",       name: "olive oil for the tin" },
  ],

  steps: [
    { text: "🫧 Stir {yeast} and {sugar} into {water} and let it sit.", timer: 10, label: "Yeast is waking up" },
    { text: "🥣 Mix the dry ingredients: {flour}, {salt} and {caraway}." },
    { text: "💧 Pour in the yeasty water, {vinegar} and {oil} and mix well." },
    { text: "👐 Knead for a few minutes until smooth and springy. Try not to add flour, it gets less sticky as you knead." },
    { text: "😴 Cover with a cloth and leave somewhere warm.", timer: 45, label: "1st proofing" },
    { text: "👐 Knead briefly again." },
    { text: "😴 Cover with a cloth and let it rise again.", timer: 30, label: "2nd proofing" },
    { text: "🫒 Oil the tin with olive oil." },
    { text: "🫓 Shape into a loaf and lay it in the tin, seam side down." },
    { text: "😴 Cover the tin with a cloth so the top doesn't dry out and let it rise. Spelt rises fast: bake as soon as it has doubled.", timer: 35, label: "Final proofing in the tin" },
    { text: "🔥 When the rise timer shows about 5 min left, turn the oven on to 200 °C (fan)." },
    { text: "🍞 Bake uncovered for 40–45 min.", timer: 40, label: "Bread is baking" },
    { text: "💦 Lightly brush the warm loaf with lukewarm water." },
    { text: "🧺 Let it cool." },
  ],
});
