// 1 задание
let a = 10;
alert(a);

// 2 задание
a = 20;
alert(a);

// 3 задание
let age = 2007;
alert(age);

// 4 задание
let name = 'Brendan Eich';
alert(name);

// 5 задание
a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// 6 задание
const result = 2 ** 5;
alert(result);

// 7 задание
a = 9;
b = 2;
alert(a % b);

// 8 задание
let num = 1;
alert = (num += 5);
alert = (num -= 3);
alert = (num *= 7);
alert = (num /= 3);
alert = (num += 1);
alert = (num -= 1);
alert(num);

// 9 задание
age = prompt('Сколько вам лет?');
alert(age);

// 10 задание
let user = {
    name: 'John',
    age: 18,
    isAdmin: true
}
alert(user.name);
alert(user.age);
alert(user.isAdmin);

name = prompt('Как тебя зовут?');
alert(`Привет, ${name}!`);
function newFunction() {
    1; задание;
}


// 1 задание
let password = String(prompt('Введите пароль'));

if (password === "123") {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}


// 2 задание
let c = Number (prompt('Введите число'))

if (c >=0 && c <=10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// 3 задание 
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

let max = 100;

if (d > max || e > max) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}

// 4 задание
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