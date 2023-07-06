type Recipe = {
  nameOfRecipe: string;
  prepTime: number;
  cookTime: number;
  ingredients: string[];
  price: number;
  type: string;
};

let recipes: Recipe[] = [
  {
    nameOfRecipe: "Red Pepper and Feta Dip",
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      "red bell peppers",
      "garlic bulb",
      "pepper",
      "olives",
      "tabasco",
      "olive oil",
      "salt",
      "feta cheese",
    ],
    price: 5000,
    type: "vegetarian",
  },
  {
    nameOfRecipe: "Biang biang noods",
    prepTime: 30,
    cookTime: 60,
    ingredients: [
      "soy sauce",
      " vegan oyster sauce",
      "black vinegar",
      "sugar",
      "garlic",
      "spring onion",
      "plain flour",
      "chilli powder",
    ],
    price: 2000,
    type: "vegan",
  },
  {
    nameOfRecipe: "Vegan Corn Zucchini Fritters",
    prepTime: 15,
    cookTime: 45,
    ingredients: [
      "zucchini",
      " medium potato",
      "corn kernels",
      "onion",
      "chickpea flour",
      "baking powder",
      "garlic powder",
      "salt",
      "pepper",
      "olive oil",
      "water",
    ],
    price: 3500,
    type: "vegan",
  },
  {
    nameOfRecipe: "Burnt Leeks & Cannellini",
    prepTime: 20,
    cookTime: 60,
    ingredients: [
      "large leeks",
      " olive oil",
      "plain flour",
      "garlic cloves",
      "oat milk",
      "white wine",
      "rosemary",
      "yeast",
      "cannellini beans",
      "sea salt",
      "black pepper",
    ],
    price: 4250,
    type: "vegan",
  },
  {
    nameOfRecipe: "Bugs Oba Gyoza",
    prepTime: 20,
    cookTime: 60,
    ingredients: [
      "plain flour",
      "hot water",
      "salt",
      "pork mince",
      "shiitake mushrooms",
      "ginger",
      "cabbage",
      "soy sauce",
    ],
    price: 5240,
    type: "non-vegetarian",
  },
];

function waterPlease(recipes: Recipe[]) {
  let i = 0;
  let veganList: Recipe[] = [];

  while (recipes[i] !== undefined) {
    if (recipes[i].type === "vegan") {
      veganList = [...veganList, recipes[i]];
    }
    i++;
  }

  i = 0;
  let ingredientsLength: number[] = [];

  while (veganList[i] !== undefined) {
    ingredientsLength = [...ingredientsLength, veganList[i].ingredients.length];
    i++;
  }
  ingredientsLength = ingredientsLength.sort((a, b) => a - b);
  console.log(ingredientsLength);

  let lastIndex = 0;
  while (veganList[i] !== undefined) {
    if (veganList[i].ingredients.length === ingredientsLength[0]) {
      lastIndex = i;
    }
    i++;
  }
  return veganList[lastIndex].nameOfRecipe;
}

let water = waterPlease(recipes);
console.log(water);
console.log(
  "-----------------------------------------------++++++++++++++++++++++++++++++++++++++++-----------"
);

function noPlainFlour(recipes: Recipe[]) {
  let i = 0;
  let n = 0;
  
  let gmRecipes: Recipe[] = [];
  while (recipes[i] !== undefined) {
    n = 0;
    let isGm = true;
    while (recipes[i].ingredients[n] !== undefined) {
      if (recipes[i].ingredients[n] === "plain flour") {
        isGm = false;
      }
      n++;
    }

    if (isGm) gmRecipes = [...gmRecipes, recipes[i]];
    i++;
  }
  return gmRecipes;
}

let flour = noPlainFlour(recipes);
console.log(flour);
