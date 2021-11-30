//Написати функцію, яка поверне кількість днів, яка пройшла від початку року
exports.date=()=>{ 
let today = new Date();
let startYear = new Date('January 00, 2020 00:00:00 GMT+2:00'); // Встановлюємодень та місяць
startYear.setFullYear(today.getFullYear()); // Встановлюємо цей рік
let msPerDay = 24 * 60 * 60 * 1000; // Кількість мілісекунд в одному дні
let daysLeft1 = (today.getTime()-startYear.getTime() ) / msPerDay;
 daysLeft = Math.round(daysLeft1); //Повертає кількість днів, які залишилися в цьому році
 console.log("task_5  "+'A='+daysLeft)
}
