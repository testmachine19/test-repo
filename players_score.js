let points = [];
const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

for (let i in players) {
  points.push(players[i].scorePoints);
}
console.log(points);

let biggestScore = Math.max(...points);
console.log("Максимальное значение:", biggestScore);
