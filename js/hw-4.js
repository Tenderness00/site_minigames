// // 1 задание

//     function min(a, b) {
//        if (a < b) {
//         return a;
//        } else {
//         return b;
//        } 
//     }

//     console.log( min(8,4));
//     console.log(min(6,6));

// // 2 задание

// function isEven(n) {
//     if (n % 2 === 0) {
//         return `Число четное`
//     } else {
//         return `Число нечетное`
//     }
// }
// console.log(isEven(4));
// console.log(isEven(5));


// // 3 задание

// function square(number) {
//     console.log(number ** 2);

// }
// const up = (n) => n ** 2;

// square(5);
// console.log(up(5));

// // 4 задание

// function age() {
// let age = +prompt(`Сколько тебе лет?`);

//     if (age < 0) {
//         alert `Вы ввели неправильное значение`;
//     } else if  (age >=0 && age <= 12) {
//         alert `Привет, друг!`;
//     }
//     else if (age >= 13) {
//         alert `Добро пожаловать!`;
//     }
//     else {
//         alert(`Вы ввели что-то не то`)
//     }
// }
// age()

// // 5 задание

// function calc(a, b) {
//     console.log(isNaN(a));
//     console.log(isNaN(b));
//     if (isNaN(a) || isNaN (b)) {
//         return `Одно или ода числа не являются числом`;
//     } else {
//         return a * b;
//     }
// }

// console.log(calc(6,'none'));

// // 6 задание

// function getNumber () {
//     let number = prompt('Введите число');
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубе равняется ${number ** 3}`;
//     }
// }
// console.log(getNumber());

// // 7 задание

// function getArea() {
//     return Math.PI * this.radius ** 2;
// }

// function getPerimeter() {
// return 2 ** Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 10,
//     methodgetArea: getArea,
//     methodgetPerimeter: getPerimeter,
// }
// const circle2 = {
//     radius: 20,
//     methodgetArea: getArea,
//     methodgetPerimeter: getPerimeter,
// }

// console.log(circle1.methodgetArea());
// console.log(circle2. methodgetPerimeter());

function guessTheNumber() {

    let secret = Math.round(Math.random() * 100)

    while (true) {
        let num = Number(prompt('Угадайте число от 1 до 100'))
        if (num === secret) {
            alert(`Вы угадали!`);
            break;
        } else if (num > secret) {
            alert(`Ваш ответ больше загаданного числа, попробуйте еще раз!`)
        } else if (num < secret) {
            alert(`Ваш ответ меньше загаданного числа, попробуйте еще раз!`)
        } else {
            alert(`Похоже Вы ввели что-то не то`)
        }
    }
}