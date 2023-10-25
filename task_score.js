let taskScoreIntroduction = 100;
let taskScoreGit = 319;
let taskScoreJS = 260;

let total = taskScoreIntroduction + taskScoreGit + taskScoreJS;
let averageScore = total / 3;

console.log(total);
console.log(averageScore);

const myName = "Slava";
const mySurname = "Vorobyov";

//console.log(`${mySurname} ${myName} gets ${total} for all tasks`);
//console.log(`${mySurname} ${myName} gets ${total / 4} average for all tasks`);

console.log(myName.length);
console.log(`${myName.slice(0, 1)}. ${mySurname} gets ${total} for all tasks`);
console.log(
  `${myName.slice(0, 1)}. ${mySurname} gets ${averageScore} for average tasks`
);
