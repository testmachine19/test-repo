let taskScoreIntroduction = 100;
let taskScoreGit = 319;
let taskScoreJS = 260;

let total = taskScoreIntroduction + taskScoreGit + taskScoreJS;

console.log(total);
console.log(total / 4);

const myName = "Slava";
const mySurname = "Vorobyov";

//console.log(`${mySurname} ${myName} gets ${total} for all tasks`);
//console.log(`${mySurname} ${myName} gets ${total / 4} average for all tasks`);

console.log(myName.length);
console.log(`${myName.slice(0, 1)}. ${mySurname} gets ${total} for all tasks`);
console.log(
  `${myName.slice(0, 1)}. ${mySurname} gets ${total / 4} for average tasks`
);
