function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

function getDayOfTheWeek(year, month, day) {
  const monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
  const dayOfTheWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const lastTwoDigits = Math.trunc(year % 100);
  const firstTwoDigits = Math.trunc(year / 100);
  const step1 = Math.trunc(lastTwoDigits / 12);
  const step2 = Math.trunc(lastTwoDigits % 12);
  const step3 = Math.trunc(step2 / 4);
  const step4 = day;
  const isMonth = (element) => element == month;
  let step5 = monthCode[months.findIndex(isMonth)];
  if (firstTwoDigits == 16 || firstTwoDigits == 20) {
    step5 += 6;
  }
  if (firstTwoDigits == 17 || firstTwoDigits == 21) {
    step5 += 4;
  }
  if (firstTwoDigits == 18) {
    step5 += 2;
  }
  if (isLeapYear(year)) {
    if (month == "January" || month == "February") {
      step5--;
    }
  }
  const step6 = (step1 + step2 + step3 + step4 + step5) % 7;
  return dayOfTheWeek[step6];
}

function makeCalendar() {
  const year = 2023;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  for (let i = 1; i <= 12; i++) {   //looping through each month
    var days = 0;
    switch (i) {                    //setting the number of days in the current(i) month
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        if (isLeapYear(year)) {
          days = 29;
        } else {
          days = 28;
        }
        break;
      default:
        days = 31;
    }
    for (let j = 1; j <= days; j++) {   // nested for-loop looping through days for printing
      console.log(`${i}-${j}-${year} is a ${getDayOfTheWeek(year, months[i - 1], j)}`);
    }
  }
}
module.exports = {getDayOfTheWeek, makeCalendar};