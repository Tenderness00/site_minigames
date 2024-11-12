// // 1 задание
let password = String(prompt('Введите пароль'));

if (password === "123") {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}


// // 2 задание
let c = Number (prompt('Введите число'))

if (c >=0 && c <=10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// // 3 задание 
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

let max = 100;

if (d > max || e > max) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}

// // 4 задание
a = '2';
b = '3';

alert(Number(a) + Number(b));

// 5 задание
let monthNumber = Number(prompt('Введите номер месяца'));

max = 12;

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Ввел что-то не то');
        break;
}

// // 6 задание

number = prompt('Пожалуйста, введите любое число');

if (number % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}


// // 7+8 задание 
let clientOS = null

switch (prompt("Введите свою ОС")) {
   case 'android':
      clientOS = 1;
      break;
   case 'ios':
        clientOS = 0;
      break;
   default:
    alert('ввели что-то не то');
}

let word = ' '
if (Number(prompt(`Укажите год производства телефона`)) < 2015) {
    word = ` облегченную `
}

if (clientOS === 0) {
    alert(`Установите${word}версию приложения для iOS по ссылке`)
} else if (clientOS === 1)
    alert(`Установите${word}версию приложения для Android по ссылке`)
