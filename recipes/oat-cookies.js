RECIPES.push({
  id: "oat-cookies",
  emoji: "🍪",
  title: "Oat Cookies",
  short: "Brown butter & milk chocolate",
  restartLabel: "🍪 New batch",
  finishText: "🍪 Cookies are ready! Best slightly warm.",
  totalTime: "about 1 h",
  finishWhenLeft: 2,

  ingredients: [
    { id: "butter",  amount: 140,  unit: "g",    name: "salted butter" },
    { id: "sugar",   amount: "1",  unit: "cup",  name: "brown sugar" },
    { id: "egg",     amount: 1,    unit: "",     name: "large egg" },
    { id: "vanilla", amount: 2,    unit: "tsp",  name: "vanilla extract" },
    { id: "flour",   amount: "1",  unit: "cup",  name: "flour" },
    { id: "oats",    amount: "1½", unit: "cups", name: "rolled oats" },
    { id: "soda",    amount: 1,    unit: "tsp",  name: "bicarbonate of soda" },
    { id: "choc",    amount: "1¼", unit: "cups", name: "chopped milk chocolate" },
    { id: "milk",    amount: 1,    unit: "tbsp", name: "milk (only if needed)" },
  ],

  steps: [
    { text: "🧈 Melt {butter} in a saucepan until golden-brown specks appear and it smells nutty. Pour it, brown bits and all, into a large bowl and let it cool." },
    { text: "💧 Mix the wet ingredients: add {sugar} to the butter and mix with a fork. Add {egg} and {vanilla} and mix until combined." },
    { text: "🌾 Mix the dry ingredients in a separate bowl: {flour}, {oats} and {soda}." },
    { text: "🥄 Add the dry mix to the wet and mix well." },
    { text: "🍫 Fold in {choc}, keeping a few chunks aside for the tops." },
    { text: "😴 Let the dough rest. It should be firm but hold together when squeezed. If it's crumbly, add {milk}.", timer: 10, label: "Dough is resting" },
    { text: "🔥 Turn the oven on to 160 °C (fan) and line a baking tray with baking paper." },
    { text: "🍪 Shape into balls and place on the tray with space around each. Keep them rounded, don't flatten. Press the reserved chocolate chunks into the tops." },
    { text: "🔥 Bake 10–12 min, until the edges are set but the centres still look slightly soft.", timer: 11, label: "Cookies are baking" },
    { text: "🧺 Let cool." },
  ],

});
