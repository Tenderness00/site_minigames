// 1 задание

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);


// 2 задание

// function filter(arr, str) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
//         result.push(arr[i]);
//       }
        
//     }
//     return result;
// }

// console.log(filter(['javaScript', 'Java'], 'ja'));


// 3 задание

// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));



// 4 задание

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));


// 5 задание

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10) +1;
// }
// console.log(getRandomNumber());


// 6 задание

// function getRandomNumber(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr;
// }
// console.log(getRandomNumber(10));


// 7 задание

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) +min;
// }
// console.log(getRandomNumber(1, 10));


// 8 задание

// console.log(new Date());


// 9 задание

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// 10   задание

// function formatDate(date) {
//     const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     const year = date.getFullYear();
//     const day = date.getDate();
//     const month = date.getMonth();
//     const dayOfWeek = days [date.getDay()];
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     return `
//     Дата : ${day} ${month[month]} ${year} - это ${dayOfWeek}.
//     Время : ${hours}:${minutes}:${seconds}`
// }
// console.log(formatDate(new Date()));


// Викторина

function simpleQuiz() {
  const quiz = [
      { 
          question: "Какой цвет небо?",
          options: ["1. Красный", "2. Синий", "3. Зеленый"],
          correctAnswer: 2,
      },
      {
          question: "Сколько дней в неделе?",
          options: ["1. Шесть", "2. Семь", "3. Восемь"],
          correctAnswer: 2,
      },
      {
          question: "Сколько у человека пальцев на одной руке?",
          options: ["1. Четыре", "2. Пять", "3. Шесть"],
          correctAnswer: 2,
      }
  ];

  let num = 0;
  for (let i = 0; i < quiz.length; i++) {
    let quizQuest = Number(prompt(`Выберите правильный ответ \n${quiz[i].question} \n${quiz[i].options}`));
    if (quizQuest === quiz[i][`correctAnswer`]) {
      num++;
      alert(`Вы ответили правильно`)
    } else {
      alert(`Вы ответили не правильно`)
    }
  }
  alert(`Вы ответили верно на ${num} вопросов`);
}


// Перевернутый тескт

function reverseText() {
  let text = String(prompt('Введите текст'));

  let arraytext = text.split('');
  arraytext.reverse();
  let result = arraytext.join('');

  alert(result);
}
