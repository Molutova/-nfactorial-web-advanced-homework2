//football team
const bfFavTeam = "Barcelona";
const bfFavPlayer = "Messi";
let bestPlayer = "Martin";
let messiNumber = 10;

const FAV_PLAYER = {
  name: "Lionel Messi",
  age: "36",
  team: "Inter Miami",
  position: "Center Forward",
};

delete FAV_PLAYER["position"];
console.log(FAV_PLAYER);

// boolean
let isFootballPlayer = true;
//null
let realMadrid = null;
console.log(realMadrid);
//undefined
let ronaldo;
console.log(ronaldo);

//Работа с объектами
let vehicle = {
  brandName: "Mercedes",
  model: "AMG GLA",
};

vehicle.model = "CLS";
delete vehicle.model;
console.log(vehicle);

//Работа с перебором свойств в объектах
let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
