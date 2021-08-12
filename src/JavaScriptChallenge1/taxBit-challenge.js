const data = {
  cereals: [
    {
      name: "Cocoa Craze",
      sugarGrams: 27,
      isForKids: true,
      price: 4.5
    },
    {
      name: "Monad Morning",
      sugarGrams: 9,
      isForKids: false,
      price: 6.25
    },
    {
      name: "Berry Blasters",
      sugarGrams: 35,
      isForKids: true,
      price: 4.2 
    },
    {
      name: "Crunchy Crunch",
      sugarGrams: 23,
      isForKids: false,
      price: 6 
    },
    {
      name: "Super Cereal",
      sugarGrams: 17,
      isForKids: false,
      price: 6.15 
    },
  ]
};

// ########################################################
// #################### Question 1 ########################
// get the names of cereals for isForKids
let kidCereals = []
console.log(kidCereals);

// ########################################################
// #################### Question 2 ########################
// get the cereals with at least 20 grams of sugar, sorted by price least to greatest
let highInSugarSorted = []
console.log(highInSugarSorted);


// ########################################################
// #################### Question 3 ########################
// write a function to get the total grams of sugar and the average grams of sugar
let getCerealInfo = (cereals) => {
  return {}
}
console.log(getCerealInfo(data.cereals));