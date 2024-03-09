const title = document.getElementById("title");
let seconds = 11;
// // let intervalSeconds = setInterval(() => {
// //   if (seconds <= 10 && seconds >= 7) {
// //     seconds--;
// //     title.textContent = seconds--;
// //     title.style.color = "green";
// //   } else if (seconds < 7 && seconds >= 4) {
// //     title.textContent = seconds--;
// //     title.style.color = "yellow";
// //   } else if (seconds > 0) {
// //     title.textContent = seconds--;
// //     title.style.color = "red";
// //   } else {
// //     clearInterval(intervalSeconds);
// //   }
// // }, 1000);
let intervalSecond = setInterval(() => {
  seconds--;
  if (seconds >= 7) {
    title.style.color = "green";
  } else if (seconds < 7 && seconds >= 4) {
    title.style.color = "yellow";
  } else {
    title.style.color = "red";
  }
  if (seconds == 0) {
    clearInterval(intervalSecond);
  }
  title.textContent = seconds;
}, 1000);

// let ism = prompt("Ismingizni kiriting");
// let vazn = +prompt("Vazn kiriting");
// let boy = +prompt("Boyingizni kiriting");

// let bmi = vazn / boy ** 2;
// if (bmi < 18.5) {
//   title.textContent = `${ism} sizning bmi :${Math.trunc(bmi)} va siz ozginsiz `;
// } else if (bmi > 18.5 && bmi < 25) {
//   title.textContent = `${ism} sizning bmi :${Math.trunc(
//     bmi
//   )} va siz normalsiz `;
// } else if (bmi >= 25 && bmi <= 30) {
//   title = `sizning bmi :${bmi} va siz semisiz `;
// } else {
//   title.textContent = `${ism} sizning bmi :${Math.trunc(
//     bmi
//   )} va siz doctorga borisiz kerak`;
// }

// let randomNamber = Math.trunc(Math.random() * 20) + 1;
// let userNamber = +prompt("Raqam kiriting 1 dan 20 gacha");
// // document.getElementById('title').textContent = randomNamber;
// if (userNamber == randomNamber) {
//   document.getElementById("title").textContent = "Siz togri toptingiz ";
// } else {
//   document.getElementById(
//     "title"
//   ).textContent = `Siz notogri toptingiz kompyutor oylagan raqam = ${randomNamber}`;
// }
// setTimeout(() => {
//   console.log("Salom");
// }, 5000);
