const getDayOfTheWeek = require("./lab-two.js").getDayOfTheWeek;
const readline = require("readline-sync");
const { makeCalendar } = require("./lab-two.js");

makeCalendar();

const month = readline.question("Enter month:");
const day = readline.questionInt("Enter day:");
const year = readline.questionInt("Enter year:");

function getDayOfTheWeekForUserDate(){
    console.log(getDayOfTheWeek(year, month, day));
}
getDayOfTheWeekForUserDate();